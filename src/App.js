import { Component } from 'react';
import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {}
    };
  }

  handleSearchClick = async () => {
    const searchQuery = 'Seattle';
    const key = process.env.REACT_APP_CITY_KEY;

    const API_URL = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${searchQuery}&format=json`;

    const response = await axios.get(API_URL);

    this.setState({ location: response.data[0] });
  }

  render() {
    return (
      <>
        <input />
        <button onClick={this.handleSearchClick}>Search</button>
        {this.state.location.place_id &&
          <h2>The city is: {this.state.location.display_name}</h2>
        }
      </>
    );
  }
}
