import React from "react";
import { connect } from "react-redux";
import { searchMovie } from "../actions/searchMovieAction";
import { API_KEY, DEFAULT_URL, CORS_PROXY } from "../actions/actionType";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  onInputCahnge = e => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = e => {
    e.perventDefault();
    this.props.searchMovie(this.state.term);
    console.log(searchMovie);
    this.setState({ term: "" });
  };

  getMovies = async e => {

    const apiCall = await fetch(`${CORS_PROXY}${DEFAULT_URL}search/movie?api_key=${API_KEY}&query=${this.state.term}`);
    const response = await apiCall.text();

    console.log(response);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder="find a movie"
            value={this.props.term}
            onChange={this.onInputCahnge}
          />
          <span>
            <button type="submit"> search</button>
          </span>
        </form>
        <button onClick={this.getMovies}></button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movie,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchMovie: movie => dispatch(searchMovie)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
