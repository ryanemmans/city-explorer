import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

export default class WeatherDay extends React.Component {
  render() {
    return (
      <Card style={{ margin: '0px 0px 20px 30px' }}>
        <Card.Header><h3>Weather Forecast</h3></Card.Header>
        <Card.Body>
          <Card.Title>{this.props.forecast.date}</Card.Title>
          <Card.Text>
            {this.props.forecast.dailyForecast}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
