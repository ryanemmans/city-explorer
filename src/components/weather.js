import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherDay from './weatherDay';

export default class Weather extends React.Component {
  render() {
    const weatherGroup = this.props.forecasts.map((forecastInfo, idx) => {
      return <WeatherDay forecast={forecastInfo} key={idx} />;
    });
    return weatherGroup;
  }
}
