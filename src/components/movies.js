import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './movie';

export default class Movies extends React.Component {
  render() {
    const movieGroup = this.props.movieObject.map((movieInfo, idx) => {
      return <Movie film={movieInfo} key={idx} />;
    });
    return movieGroup;
  }
}
