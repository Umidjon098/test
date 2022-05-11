import React, { useEffect, useState } from "react";
import { Company } from "../../api/main/company";
import Navbar from "../navbar/navbar";
import DataTable from "./table";

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  const getCompanies = async (number = 1) => {
    Company.get({ page: number, size: 10 })
      .then((res) => {
        setCompanies(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getCompanies();
  }, []);
  return (
    <>
      <Navbar />
      <DataTable List={companies} getCompanies={getCompanies} />
    </>
  );
};

export default Companies;
