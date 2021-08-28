import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Row';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Movie from './movie';

export default class Movies extends React.Component {
  render() {
    return (
      <Container>
        <Row xs={2} md={3} lg={3} xl={3} xxl={4}>
          {this.props.movieObject.map((movieInfo, idx) => (
            <Col key={idx}>
              <Movie film={movieInfo} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
