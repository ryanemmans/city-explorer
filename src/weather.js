import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
// import Card from 'react-bootstrap/Card';

export default class Weather extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    console.log(this.props);
    const weatherGroup = this.props.forecasts.map((forecastInfo, idx) => {
      return <Forecast forecast={forecastInfo} key={idx} />;
    });
    return weatherGroup;
  }
}

class Forecast extends React.Component {
  render() {
    return (
      <Card style={{ margin: '0px 0px 20px 30px' }}>
        <Card.Header><h3>Weather Forecast</h3></Card.Header>
        <Card.Body>
          <Card.Title>{this.props.forecast.date}</Card.Title>
          <Card.Text>
            {this.props.forecast.description}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
