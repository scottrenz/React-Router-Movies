import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Route } from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

 const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };
//   let nprops= props
// nprops = [props, addToSavedList]
  return (
    <div>
      <SavedList list={savedList} />
      <MovieList  />
      {/* <Movie list={savedList} /> */}
      <Route exact path="/" component={MovieList} />
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
