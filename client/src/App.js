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
      <SavedList list={savedList} />
      <MovieList  />
      {/* <Movie list={savedList} /> */}
      <Route exact path="/" component={MovieList} />
      <Route path='/movie/:id' component={Movie} />
      {/* <div>Replace this Div with your Routes</div> */}
    </div>
  );
};

export default App;
