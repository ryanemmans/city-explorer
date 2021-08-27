import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

export default class Movie extends React.Component {
  render() {
    return (
      // {
      //   this.props.movieObject.length &&
      <Card style={{ margin: '0px 0px 20px 30px' }}>
        <Card.Header><h3>{this.props.film.title}</h3></Card.Header>
        {/* // ? this.props.movieObject[0].title : 'Sorry, no title.'}</h3> */}
        <Card.Body>
          <Card.Title>{this.props.film.poster_path}</Card.Title>
          <Card.Text>
            {this.props.film.overview}
          </Card.Text>
          <Card.Text>
            {this.props.film.vote_average}
          </Card.Text>
          <Card.Text>
            {this.props.film.vote_count}
          </Card.Text>
          <Card.Text>
            {this.props.film.popularity}
          </Card.Text>
          <Card.Text>
            {this.props.film.release_date}
          </Card.Text>
        </Card.Body>
      </Card >
    );
  }
}
