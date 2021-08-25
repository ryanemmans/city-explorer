import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   forecastData: this.props.forecastData
    };
  }

  render() {
    console.log(this.props);
    return (
      <Card>
        <Card.Header>Weather Forecast</Card.Header>
        <Card.Body>
          <Card.Title>{date}</Card.Title>
          <Card.Text>
            <p>{description}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
