import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSearchInput = (e) => {
    this.props.Search(e.target.value);
  };

  render() {
    return (
      <div className="searchbar-box">
        <input
          type="text"
          placeholder="Search"
          onChange={this.handleSearchInput}
        />
      </div>
    );
  }
}

export default SearchBar;
