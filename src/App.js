import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';
import Weather from './weather';


export default class App extends React.Component {
  // use constructor and super only if you have state
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      forecastData: []
    };
  }

  handleSearchClick = async () => {
    const searchQuery = this.state.searchQuery;
    const key = process.env.REACT_APP_CITY_KEY;
    const API_URL = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${searchQuery}&format=json&limit=1`;

    // LINES 27 - 34, & 40 disable error
    const weatherRes = await axios.get(`http://localhost:3001/weather`, {
      params: {
        lat: this.state.location.lat,
        lon: this.state.location.lon,
        cityName: this.state.searchQuery
      }
    });
    console.log(weatherRes.data);
    // -----------------------------//
    try {
      const locationRes = await axios.get(API_URL);
      console.log('Location Data: ', locationRes.data);
      this.setState({
        location: locationRes.data[0],
        alert: '',
        forecastData: weatherRes.data
      });
    } catch (error) {
      this.setState({ alert: `${error}` });
    };
  }

  render() {
    return (
      <Container>
        <Form>
          <Form.Group>
            <Form.Label style={{ margin: '50px 0px 0px 30px' }}>
              <h1>City Explorer</h1>
              <h3>Search For a City:</h3>
            </Form.Label>
            <Form.Control type="text" placeholder='Enter City Here...' style={{ margin: '10px 0px 20px 30px', width: '20rem' }} onChange={(e) => this.setState({ searchQuery: e.target.value })} value={this.state.searchQuery} onSubmit={e => { e.preventDefault(); }} />
            <Button variant='info' size='lg' style={{ margin: '0px 0px 20px 30px' }} onClick={this.handleSearchClick}>Explore!</Button>
          </Form.Group>
        </Form>
        {this.state.alert ? (
          <Alert variant={'danger'} style={{ margin: '0px 0px 20px 30px', width: '60%' }}>
            <Alert.Heading>{this.state.alert}</Alert.Heading>
            <hr />
            <p>
              Please enter a valid location.
            </p>
          </Alert>
        ) : (this.state.location.place_id &&
          <div>
            <Card style={{ margin: '0px 0px 20px 30px', border: '1px solid lightGray', borderRadius: '5px', width: '60%'}}>
              <Card.Header>
                <h2>Your search: {this.state.location.display_name}</h2>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <h4>Latitude: {this.state.location.lat}</h4>
                  <h4>Longitude: {this.state.location.lon}</h4>
                </Card.Text>
              </Card.Body>
            </Card>
            <Row>
              <Col style={{ display: 'flex', justifyContent: 'space evenly', flexWrap: 'wrap' }}>
                <Weather forecasts={this.state.forecastData} />
              </Col>
            </Row>
            <Image src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=13`} style={{ boxShadow: '0px 2px 6px gray', margin: '5px 0px 30px 32px' }} alt='map' rounded />
            {/* &markers=icon:|${this.state.location.lat}|${this.state.location.lon}| */}
          </div>
        )}
      </Container>
    );
  };
}
