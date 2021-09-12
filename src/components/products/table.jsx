import React, { Component } from "react";
import Pagination from "react-js-pagination";
class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    };
  }
  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
    this.props.getProducts(pageNumber);
  }
  render() {
    const { List, searchTerm } = this.props;
    console.log(localStorage.getItem("token"));
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Supplier</th>
              <th scope="col">Unit</th>
            </tr>
          </thead>
          {this.props.searchTerm === "" ? (
            <tbody>
              {List.items === undefined ? (
                <div>Loading...</div>
              ) : List.items.length === 0 ? (
                <div>Malumot mavjud emas!</div>
              ) : (
                List.items
                  .filter((data) => {
                    if (searchTerm === "") {
                      return data;
                    } else if (
                      data.name.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return data;
                    }
                  })
                  .map((data, id) => {
                    id++;
                    return (
                      <tr key={data.id}>
                        <th scope="row">{id}</th>
                        <td>{data.name}</td>
                        <td>{data.supplier}</td>
                        <td>{data.unit}</td>
                      </tr>
                    );
                  })
              )}
            </tbody>
          ) : (
            <tbody>
              {List.items === undefined ? (
                <div>Loading...</div>
              ) : List.items.length === 0 ? (
                <div>Malumot mavjud emas!</div>
              ) : (
                List.items
                  .filter((data) => {
                    if (searchTerm === "") {
                      return data;
                    } else if (
                      data.name.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return data;
                    }
                  })
                  .sort(function (a, b) {
                    if (a.name < b.name) {
                      return -1;
                    }
                    if (a.name > b.name) {
                      return 1;
                    }
                    return 0;
                  })
                  .map((data, id) => {
                    id++;
                    return (
                      <tr key={data.id}>
                        <th scope="row">{id}</th>
                        <td>{data.name}</td>
                        <td>{data.supplier}</td>
                        <td>{data.unit}</td>
                      </tr>
                    );
                  })
              )}
            </tbody>
          )}
        </table>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={List.total_count}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    );
  }
}

export default DataTable;
