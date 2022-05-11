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

    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          {searchTerm === "" ? (
            <tbody>
              {List.items === undefined ? (
                <div>Loading...</div>
              ) : List.items.length === 0 ? (
                <div>Malumot mavjud emas!</div>
              ) : (
                List.items.map((data, id) => {
                  id++;
                  return (
                    <tr key={data.id}>
                      <th scope="row">{id}</th>
                      <td>{data.name}</td>
                      <td>{data.category?.name}</td>
                      <td>{data.description}</td>
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
                  .sort((a, b) => {
                    if (
                      a.name?.toLowerCase().indexOf(searchTerm) >
                      b.name?.toLowerCase().indexOf(searchTerm)
                    ) {
                      return 1;
                    }
                    if (
                      a.name?.toLowerCase().indexOf(searchTerm) <
                      b.name?.toLowerCase().indexOf(searchTerm)
                    ) {
                      return -1;
                    }
                    return 0;
                  })
                  .map((data, id) => {
                    id++;
                    return (
                      <tr key={id}>
                        <th scope="row">{id}</th>
                        <td>{data.name}</td>
                        <td>{data.category?.name}</td>
                        <td>{data.description}</td>
                      </tr>
                    );
                  })
              )}
            </tbody>
          )}
        </table>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={List?.num_items_per_page}
          totalItemsCount={List?.total_count}
          pageRangeDisplayed={List?.num_items_per_page}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    );
  }
}

export default DataTable;
