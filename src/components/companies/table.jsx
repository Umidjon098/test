import React, { useState } from "react";
import Pagination from "react-js-pagination";
import { Link } from "react-router-dom";

const DataTable = ({ List, getCompanies }) => {
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    getCompanies(pageNumber);
  };
  const setID = (id) => {
    localStorage.setItem("id", id);
  };
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Descrition</th>
            <th scope="col">Currency</th>
          </tr>
        </thead>
        {
          <tbody>
            {List.items === undefined ? (
              <div>Loading...</div>
            ) : List.items.length === 0 ? (
              <div>Malumot mavjud emas!</div>
            ) : (
              List.items.map((data, id) => {
                id++;
                return (
                  <tr key={id}>
                    <th scope="row">{id}</th>
                    <td>
                      <Link
                        onClick={() => setID(data.id)}
                        to="/companies/products"
                      >
                        {data.name}
                      </Link>
                    </td>
                    <td>{data.short_description}</td>
                    <td>{data.currency}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        }
      </table>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={List?.num_items_per_page}
        totalItemsCount={List?.total_count}
        pageRangeDisplayed={List?.num_items_per_page}
        onChange={handlePageChange.bind(this)}
      />
    </div>
  );
};

export default DataTable;
