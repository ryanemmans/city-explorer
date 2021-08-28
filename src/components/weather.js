import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import WeatherDay from './weatherDay';

export default class Weather extends React.Component {
  render() {
    return (
      <>
        {this.props.forecasts.map((forecastInfo, idx) => (
          <Col key={idx}>
            <WeatherDay forecast={forecastInfo} />
          </Col>
        ))}
      </>
    );
  }
}
