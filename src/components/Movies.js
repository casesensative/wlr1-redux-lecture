import {connect} from 'react-redux';

const Movies = (props) => {
  console.log(props);
  return(
    <div>
      <h1>Movies</h1>
      {props.movieReducer.movies.map((movie) => {
        return <div key={movie.movie_id}>
          {movie.title}
        </div>
      })}
    </div>
  )
}

const mapStateToProps = (store) => store;

export default connect(mapStateToProps)(Movies);