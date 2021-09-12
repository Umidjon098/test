import React, { Component } from "react";
import Navbar from "../navbar/navbar";
import SearchBar from "./searchbar";
import "../style/style.css";
import DataTable from "./table";
import axios from "axios";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [],
      searchTerm: "",
    };
  }
  componentDidMount() {
    this.getProducts();
  }

  Search = (search) => {
    this.setState({ searchTerm: search });
  };
  getProducts = async (number = 1) => {
    const url = "https://face.ox-sys.com/variations";
    await axios(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      params: {
        page: number,
      },
    }).then((response) => {
      this.setState({ List: response.data });
    });
  };
  render() {
    return (
      <>
        <Navbar />
        <SearchBar Search={this.Search} />
        <DataTable
          List={this.state.List}
          searchTerm={this.state.searchTerm}
          getProducts={this.getProducts}
          searchTerm={this.state.searchTerm}
        />
      </>
    );
  }
}

export default Products;
