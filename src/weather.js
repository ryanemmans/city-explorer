import React from 'react';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecastData: this.props.forecastData,
    };
  }
}