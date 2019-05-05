import React, { Component } from "react";
import { connect } from "react-redux";
import { requestMovies } from "../actions/moviesAction";
import { getMovieDetail, searchInput, renderPage, searchDetail } from "../actions/searchMovieAction";
import NavBar from "../components/navigation/NavBar";
import Loading from "../components/Loading";

const mapStateToProps = state => {
  return {
    isLoading: state.requestMovies.isLoading,
    movies: state.requestMovies.movies,
    error: state.requestMovies.error,
    movieId: state.getMovieDetail.movieId,
    renderDetail: state.getMovieDetail.renderDetail,
    renderPage: state.getMovieDetail.renderPage,
    searchInputField: state.getMovieDetail.searchInputField,
    isLoadingS: state.getMovieDetail.isLoadingS,
    movieS: state.getMovieDetail.isLoadingS,
    errorS: state.getMovieDetail.errorS
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestMovies: () => dispatch(requestMovies()),
    onGetMovieDetail: event => dispatch(getMovieDetail(event.currentTarget.id)),
    onRenderPage: event => dispatch(renderPage(event.target.id)),
    onSearchInput: event => dispatch(searchInput(event.target.value)),
    onSearchDetail: a => dispatch(searchDetail(a))
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestMovies();
  }

  render() {
    console.log("app render", this.props.renderPage);
    const { movies, isLoading, onGetMovieDetail, renderDetail, movieId, onRenderPage, renderPage, movieS } = this.props;

    return isLoading ? (
      <Loading />
    ) : (
      <NavBar
        renderPage={onRenderPage}
        searchInput={this.props.onSearchInput}
        searchDetail={this.props.onSearchDetail}
        searchInputField={this.props.searchInputField}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
