import React from 'react';
import { connect } from 'react-redux';
import Grid from './Grid';

const Trailer = ({ data }) => (
  <a href={ data.Trailer.url }
     target="_blank"
     rel="noopener noreferrer">
    trailer...
  </a>
);

const config = [
  {
    title: 'id',
    fieldName: 'imdbID'
  },
  {
    title: 'title',
    fieldName: 'Title'
  },
  {
    title: 'rating',
    fieldName: 'imdbRating',
  },
//  {
//    title: 'trailer',
//    component: Trailer
//  }
];

const App = ({ data }) => (
  <div>
    <Grid config={ config } data={ data } />
  </div>
);

const mapStateToProps = state => ({
  data: state.movies
});

export default connect(mapStateToProps)(App);
