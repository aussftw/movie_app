import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AppBar } from "material-ui";
import SearchBar from "./SearchBar";
import HomePage from "./HomePage";

class MovieBrowser extends Component {
  render() {
    return (
      <div className="App">
        <AppBar title="Movie Browser" />
        <Container>
          <Row>
            <SearchBar />
            <p>Search will go here</p>
          </Row>
          <Row>
            <p>Movie list will go here</p>
          </Row>
        </Container>
        <HomePage />
      </div>
    );
  }
}

export default MovieBrowser;
