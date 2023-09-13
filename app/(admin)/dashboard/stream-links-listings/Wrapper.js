"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useReducer, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ActionsButtons from "../../../../components/dashboard/actionsButtons/ActionsButtons";
import DeleteAlert from "../../../../components/dashboard/deleteAlert/DeleteAlert";

import Table from "../../../../components/dashboard/streamLink/table/Table";
import Popup from "../../../../components/popupWrapper/Popup";
import {
  checkboxClicked,
  createItem,
  deleteItem,
  getData,
} from "../../../../utils/dashboardTablePagesFunctions";
import { paginationsReducer } from "../../../../utils/paginationsReducer";
import classes from "./wrapper.module.css";
const Wrapper = ({ dataFetched }) => {
  const notify = (message, type) => toast[type](message);

  const router = useRouter();
  const pathname = usePathname();
  const [streamLinks, setStreamLinks] = useState(dataFetched?.data?.data || []);
  const [selectedStreamLinks, setSelectedStreamLinks] = useState([]);
  const [deleteAlert, setDeleteAlert] = useState(false);
  const selectElement = (elemID) => {
    checkboxClicked(elemID, selectedStreamLinks, setSelectedStreamLinks);
  };

  const createStreamLink = () => {
    createItem(pathname, router);
  };

  const deleteStreamLink = () => {
    deleteItem(
      streamLinks,
      selectedStreamLinks,
      setStreamLinks,
      setSelectedStreamLinks,
      "streamLink"
    );
    toggleDeleteAlert();
  };
  const toggleDeleteAlert = () => {
    if (selectedStreamLinks?.length > 0) {
      setDeleteAlert(!deleteAlert);
    } else {
      notify("you have not selected any item to delete", "warning");
    }
  };
  const [paginations, dispatchDetail] = useReducer(paginationsReducer, {
    rowsPerPage: 10,
    currentPage: 1,
    results: dataFetched?.results,
  });
  const [seacrhValue, setSearchValue] = useState("");

  // const fetchNewData = useCallback( , [paginations, setStreamLinks, dispatchDetail]);
  useEffect(() => {
    const fetchNewData = async () => {
      const query = {
        page: paginations.currentPage,
        limit: paginations.rowsPerPage,
        searchValue: seacrhValue,
        or: ["channelName"],

      };

      const newData = await getData("streamLink", query);
      setStreamLinks(newData.data.data);
      dispatchDetail({ type: "RESULTS", value: newData.results });
    };
    fetchNewData();
  }, [
    paginations.currentPage,
    paginations.rowsPerPage,
    setStreamLinks,
    dispatchDetail,
    seacrhValue
  ]);
  const handleSearch = (val) => {
    setSearchValue(val);
  };

  const getSearchedData = useCallback(async () => {
    try {
      const newData = await getData("streamLink", {
        page: 1,
        limit: paginations.rowsPerPage,
        searchValue: seacrhValue,
        or: ["channelName"],
      });
      dispatchDetail({
        type: "SEARCH-RESULTS",
        currentPage: 1,
        results: newData.results,
      });
      setStreamLinks(newData.data.data);
      console.log("response", newData);
    } catch (error) {
      console.log("error", error);
    }
  }, [seacrhValue, paginations.rowsPerPage]);
  useEffect(() => {
    getSearchedData();
    console.log("search", seacrhValue);
  }, [seacrhValue, getSearchedData]);

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

      {deleteAlert && (
        <Popup>
          <DeleteAlert
            cancelFunc={toggleDeleteAlert}
            deleteFunc={deleteStreamLink}
          />
        </Popup>
      )}
      <div className={classes["actions"]}>
        <ActionsButtons
          firstButtonFunction={createStreamLink}
          secondButtonFunction={toggleDeleteAlert}
          first={"Create"}
          second={"Delete"}
        />
      </div>
      <Table
        seacrhValue={seacrhValue}
        handleSearch={handleSearch}
        streamLinks={streamLinks}
        selectElement={selectElement}
        selectedStreamLinks={selectedStreamLinks}
        paginations={paginations}
        dispatchDetail={dispatchDetail}
      />
    </div>
  );
};

export default Wrapper;
