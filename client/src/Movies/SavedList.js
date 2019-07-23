import React from 'react';
import { Link } from 'react-router-dom'

const SavedList = props => (
<div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
      <Link className='home-button' to={`/fresh/0`}>Home</Link>
      {/* <Link className='home-button' to={`/fresh/0`}>Home</Link> */}
  </div>
);

export default SavedList;
