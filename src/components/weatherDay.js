import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

export default class WeatherDay extends React.Component {
  render() {
    return (
      <Card style={{ margin: '0px 0px 20px 30px' }}>
        <Card.Header style={{ backgroundColor: '#ffc007' }} ><h3>{this.props.forecast.date}</h3></Card.Header>
        <Card.Body>
          <Card.Text>
            <h4>{this.props.forecast.dailyForecast}</h4>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
