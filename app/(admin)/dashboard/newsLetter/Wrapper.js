"use client";
import React, { useEffect, useReducer, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactTable from "../../../../components/dashboard/newsLetter/contactTable/Table";
import { flagItem } from "../../../../utils/dashboardHelperFunctions";
import { getData } from "../../../../utils/dashboardTablePagesFunctions";
import { paginationsReducer } from "../../../../utils/paginationsReducer";
import TableWrapper from "./TableWrapper";
import classes from "./wrapper.module.css";

const Wrapper = ({ peopleContactedUs, newsLetterFetchedData }) => {
  const notify = (message, type) => toast[type](message);

  const [usersContactedUs, setUsersContactedUs] = useState(
    peopleContactedUs?.data?.data
  );
  const [newsLetter, setNewsLetter] = useState(newsLetterFetchedData.data.data);
  // const [selectedItems, setSelectedItems] = useState([]);
  // const selectElement = (elemID) => {
  //   checkboxClicked(elemID, selectedItems, setSelectedItems);
  // };

  const [paginations, dispatchDetail] = useReducer(paginationsReducer, {
    rowsPerPage: 10,
    currentPage: 1,
    results: peopleContactedUs?.results,
  });
  useEffect(() => {
    const fetchNewData = async () => {
      const query = {
        page: paginations.currentPage,
        limit: paginations.rowsPerPage,
      };

      const newData = await getData("contact-us", query);
      setUsersContactedUs(newData.data.data);
      dispatchDetail({ type: "RESULTS", value: newData.results });
    };
    fetchNewData();
  }, [
    paginations.currentPage,
    paginations.rowsPerPage,
    setUsersContactedUs,
    dispatchDetail,
  ]);
  const reverseFlagProp = async (itemID) => {
    flagItem(
      itemID,
      usersContactedUs,
      setUsersContactedUs,
      "contact-us",
      notify
    );
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
        theme="dark"
      />
      <h2 className={classes["subheading"]}>Entry Data</h2>
      <TableWrapper newsLetter={newsLetter} />

      <h2 className={classes["subheading"]}>Contact</h2>
      <ContactTable
        tableData={usersContactedUs}
        paginations={paginations}
        dispatchDetail={dispatchDetail}
        reverseFlagProp={reverseFlagProp}
      />
    </div>
  );
};

export default Wrapper;
