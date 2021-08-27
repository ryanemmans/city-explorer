// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

// export default class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchQuery: '',
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
