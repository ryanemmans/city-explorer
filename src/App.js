import { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {}
    };
  }

  handleSearchClick = async () => {
    const searchQuery = this.state.searchQuery;
    const key = process.env.REACT_APP_CITY_KEY;
    const API_URL = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${searchQuery}&format=json&limit=1`;
    const response = await axios.get(API_URL);
    this.setState({ location: response.data[0] });
  }

  render() {
    console.log(this.state.location);
    return (
      <Container>
        <Form>
          <Form.Group>
            <Form.Label style={{ margin: '50px 0px 0px 30px' }}><h1>Search For a City: </h1></Form.Label>
            <Form.Control placeholder='Enter City Here...' style={{ margin: '10px 0px 20px 30px', width: '30rem' }} onChange={(e) => this.setState({ searchQuery: e.target.value })} value={this.state.searchQuery} />
            <Button variant='info' size='lg' style={{ margin: '0px 0px 20px 30px' }} onClick={this.handleSearchClick}>Explore!</Button>
            {
              this.state.location.place_id &&
              <div>
                <div style={{ margin: '0px 0px 20px 30px', border: '1px solid lightGray', borderRadius: '4px', padding: '20px', width: '60%' }}>
                  <h2>Your search: {this.state.location.display_name}</h2>
                  <h4>Latitude: {this.state.location.lat}</h4>
                  <h4>Longitude: {this.state.location.lon}</h4>
                </div>
                <Image src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=13`} rounded style={{ boxShadow: '0px 2px 6px gray', margin: '5px 0px 0px 32px' }} />
                {/* &markers=icon:|${this.state.location.lat}|${this.state.location.lon}| */}
              </div>
            }
          </Form.Group>
        </Form>
      </Container >
    );
  }
}
