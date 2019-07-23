import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Movie = (props) => {
  const [movie, setMovie] = useState({});
  const [star, setStar] = useState({stars: []});
  useEffect(() => {
    const id = 1;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
       .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
       .then(response => {
        setMovie(response.data);
        setStar({stars: response.data.stars});
      })
        .catch(error => {
          console.error(error);

        });

  },[props.match.params.id]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore } = movie;
  
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>
          {star.stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))} 
      <div onClick={ ()=> props.addToSavedList(movie) }  className="save-button">Save</div>

      </div>
      </div>
  );
}

export default Movie;
