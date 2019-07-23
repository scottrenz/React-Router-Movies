import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Route } from 'react-router-dom';



const App = (props) => {
  const [savedList, setSavedList] = useState( [] );
 const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>

{/* <SavedList onFocus={ ()=> props.history.push('/fresh/0') } list={savedList} /> */}
      <SavedList list={savedList} />
      <MovieList  />
      {/* <Route exact path="/" component={MovieList} /> */}
      <Route path="/fresh/0" component={Movie} />
      {/* <Route path='/movie/:id' component={Movie} /> */}
      <Route
  path='/movie/:id'
  render={(props) => <Movie {...props} addToSavedList={addToSavedList} isAuthed={true} />}
/>
      {/* <div>Replace this Div with your Routes</div> */}
    </div>
  );
};

export default App;
