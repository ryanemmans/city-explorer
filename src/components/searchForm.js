// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

// export default class SearchForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchQuery: '',
//       location: {},
//       forecastData: [],
//       lat: '',
//       lon: '',
//       cityName: '',
//       movieData: []
//     };
//   }

//   handleClick = async (e) => {
//     e.preventDefault();
//     try {
//       const searchQuery = this.state.searchQuery;
//       const key = process.env.REACT_APP_CITY_KEY;
//       const LOCATION_API_URL = `https://us1.locationiq.com/v1/search.php?key=${key}&q=${searchQuery}&format=json&limit=1`;
//       const locationRes = await axios.get(LOCATION_API_URL);
//       // console.log('Location Data: ', locationRes.data);
//       this.setState({
//         location: locationRes.data[0],
//         lat: locationRes.data[0].lat,
//         lon: locationRes.data[0].lon,
//         alert: '',
//       });

//       const WEATHER_API_URL = `${process.env.REACT_APP_BACKEND}/weather?searchQuery=${this.state.searchQuery}&lat=${this.state.lat}&lon=${this.state.lon}`;
//       const weatherRes = await axios.get(WEATHER_API_URL);
//       this.setState({
//         forecastData: weatherRes.data,
//       });
//       console.log(this.state.searchQuery);

//       const MOVIE_API_URL = `${process.env.REACT_APP_BACKEND}/movies?searchQuery=${this.state.searchQuery}`;
//       const movieRes = await axios.get(MOVIE_API_URL);
//       console.log(movieRes);
//       this.setState({
//         movieData: movieRes.data,
//       });
//       console.log(this.state.movieData);
//     } catch (error) {
//       this.setState({ alert: `${error}` });
//     };
//   }

//   render() {
//     return (
//       <Form>
//         <Form.Group>
//           <Form.Label style={{ margin: '50px 0px 0px 30px' }}>
//             <h1>City Explorer</h1>
//             <h3>Search For a City:</h3>
//           </Form.Label>
//           <Form.Control
//             type="text"
//             placeholder='Enter City Here...'
//             style={{ margin: '10px 0px 20px 30px', width: '20rem' }}
//             onChange={(e) => this.setState({ searchQuery: e.target.value })}
//             value={this.state.searchQuery} />
//           <Button
//             variant='info'
//             size='lg'
//             style={{ margin: '0px 0px 20px 30px' }}
//             onClick={this.handleClick}>Explore!</Button>
//         </Form.Group>
//       </Form>
//     );
//   }
// }
