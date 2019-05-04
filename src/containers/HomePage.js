import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchMovies } from "../actions/moviesAction";

const mapStateToProps = state => {
  const { movies, loading, page, totalResults } = state.moviesStore;
  return { movies, loading, page, totalResults };
};

class HomePage extends Component {
  componentDidlMount() {
    this.props.fetchMovies();
    console.log(fetchMovies);
  }



  render() {
    console.log(this.state)
    return (
      <div>
        <h1>ddd</h1>
        <p> List of some movies </p>
        <button onClick={this.props.fetchMovies}>load</button>
      </div >
    )
  }
}

export default connect(
  mapStateToProps,
  { fetchMovies }
)(HomePage);
