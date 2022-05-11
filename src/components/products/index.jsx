import React, { Component } from "react";
import Navbar from "../navbar/navbar";
import SearchBar from "./searchbar";
import "../style/style.css";
import DataTable from "./table";
import axios from "axios";
import { Company } from "../../api/main/company";
import { getID } from "../../util";

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
    const id = getID();
    Company.getProduct(id, { page: number })
      .then((res) => {
        this.setState({ List: res });
      })
      .catch((error) => {
        console.log(error);
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
        />
      </>
    );
  }
}

export default Products;
