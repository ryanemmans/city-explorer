import { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
      <Form>
        <Form.Group>
          <Form.Label>Enter a City: </Form.Label>
          <Form.Control onChange={(e) => this.setState({ searchQuery: e.target.value })} value={this.state.searchQuery} />
          <Button onClick={this.handleSearchClick}>Explore!</Button>
          {
            this.state.location.place_id &&
            <>
              <h2>The city is: {this.state.location.display_name}</h2>
              <h3>The city is: {this.state.location.lat}</h3>
              <h3>The city is: {this.state.location.lon}</h3>
            </>
          }
        </Form.Group>
      </Form>
    );
  }
}
