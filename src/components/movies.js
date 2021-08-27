import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
// import Card from 'react-bootstrap/Card';

export default class Movies extends React.Component {
  render() {
    console.log(this.props.movieObject);
    // const MovieGroup = this.props.movieObject.map((movieInfo, idx) => {
    //   return <Films movie={movieInfo} key={idx} />;
    // });
    // return MovieGroup;
    return (
      <>
        {this.props.movieObject.length &&
          <Card style={{ margin: '0px 0px 20px 30px' }}>
            <Card.Header><h3>{this.props.movieObject[0].title ? this.props.movieObject[0].title : 'Sorry, no title.'}</h3></Card.Header>
            <Card.Body>
              <Card.Title>{this.props.movieObject[0].poster_path}</Card.Title>
              <Card.Text>
                {this.props.movieObject[0].overview}
              </Card.Text>
              <Card.Text>
                {this.props.movieObject[0].vote_average}
              </Card.Text>
              <Card.Text>
                {this.props.movieObject[0].vote_count}
              </Card.Text>
              <Card.Text>
                {this.props.movieObject[0].popularity}
              </Card.Text>
              <Card.Text>
                {this.props.movieObject[0].release_date}
              </Card.Text>
            </Card.Body>
          </Card>}
      </>
    );
  }
}

// class Films extends React.Component {
//   render() {
//     return (
//       <Card style={{ margin: '0px 0px 20px 30px' }}>
//         <Card.Header><h3>{this.props.films.title ? this.props.films.title : 'Sorry, no title.'}</h3></Card.Header>
//         <Card.Body>
//           <Card.Title>{this.props.films.poster_path}</Card.Title>
//           <Card.Text>
//             {this.props.films.overview}
//             {this.props.films.vote_average}
//             {this.props.films.vote_count}
//             {this.props.films.popularity}
//             {this.props.films.release_date}
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     );
//   }
// }
