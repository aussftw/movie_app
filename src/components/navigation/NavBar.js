import React from "react";
import PropTypes from "prop-types";

class SearchAppBar extends React.Component {
  render() {
    const { renderPage } = this.props;

    return (
      <input
        type="text"
        placeholder="Search…"
        onChange={this.props.searchInput}
        onKeyPress={event => {
          if (event.key === "Enter") {
            this.props.searchDetail(this.props.searchInputField);
          }
        }}
        value={this.props.searchInputField}
      />
    );
  }
}

export default SearchAppBar;
