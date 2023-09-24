import React, { useEffect, useReducer, useState } from "react";
import Table from "../../../../components/dashboard/newsLetter/dataEntryTable/Table";
import { checkboxClicked } from "../../../../utils/dashboardTablePagesFunctions";
import { paginationsReducer } from "../../../../utils/paginationsReducer";
import { getData } from "../../../../utils/dashboardTablePagesFunctions";

const TableWrapper = ({ newsLetter }) => {
  const [paginations, dispatchDetail] = useReducer(paginationsReducer, {
    rowsPerPage: 10,
    currentPage: 1,
    results: 0,
    // peopleContactedUs?.results,
  });
  const [selectedItems, setSelectedItems] = useState([]);
  const selectElement = (elemID) => {
    checkboxClicked(elemID, selectedItems, setSelectedItems);
  };
  useEffect(() => {
    const fetchNewData = async () => {
      const query = {
        page: paginations.currentPage,
        limit: paginations.rowsPerPage,
      };

      const newData = await getData("contact-us", query);
      setSelectedItems(newData.data.data);
      dispatchDetail({ type: "RESULTS", value: newData.results });
    };
    fetchNewData();
  }, [
    paginations.currentPage,
    paginations.rowsPerPage,
    setSelectedItems,
    dispatchDetail,
  ]);

  return (
    <Table
      newsLetter={newsLetter}
      selectElement={selectElement}
      paginations={paginations}
      dispatchDetail={dispatchDetail}
    />
  );
};

export default TableWrapper;
