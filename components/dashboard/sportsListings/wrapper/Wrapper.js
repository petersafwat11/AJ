"use client";
import { usePathname, useRouter } from "next/navigation";

import React, { useEffect, useReducer, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { flagItem } from "../../../../utils/dashboardHelperFunctions";
import {
  checkboxClicked,
  createItem,
  deleteItem,
  getData,
} from "../../../../utils/dashboardTablePagesFunctions";
import { paginationsReducer } from "../../../../utils/paginationsReducer";
import Popup from "../../../popupWrapper/Popup";
import ActionsButtons from "../../actionsButtons/ActionsButtons";
import DeleteAlert from "../../deleteAlert/DeleteAlert";
import SportsSelection from "../sportsSelection/SportsSelection";
import Table from "../table/Table";
import classes from "./wrapper.module.css";

const Wrapper = ({ dataFetched }) => {
  const notify = (message, type) => toast[type](message);

  const router = useRouter();
  const pathname = usePathname();
  const [sports, setSports] = useState(dataFetched?.data?.data || []);
  const [selectedSports, setSelectedSports] = useState([]);
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [sportsType, setSportsType] = useState("Football");
  const changeSportsType = (val) => {
    setSportsType(val);
  };

  const selectElement = (elemID) => {
    checkboxClicked(elemID, selectedSports, setSelectedSports);
  };

  const createSport = () => {
    createItem(pathname, router);
  };

  const deleteSport = () => {
    deleteItem(sports, selectedSports, setSports, setSelectedSports, "sports");
    toggleDeleteAlert();
  };
  const toggleDeleteAlert = () => {
    if (selectedSports?.length > 0) {
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
  useEffect(() => {
    const fetchNewData = async () => {
      const query = {
        page: paginations.currentPage,
        limit: paginations.rowsPerPage,
        sportCategory: sportsType,
      };
      const newData = await getData("sports", query);
      setSports(newData.data.data);
      dispatchDetail({ type: "RESULTS", value: newData.results });
    };
    fetchNewData();
  }, [
    paginations.currentPage,
    paginations.rowsPerPage,
    setSports,
    dispatchDetail,
    sportsType,
  ]);
  const reverseFlagProp = async (itemID) => {
    flagItem(itemID, sports, setSports, "sports", notify);
  };

  return (
    <div className={classes["container"]}>
      {deleteAlert && (
        <Popup>
          <DeleteAlert
            cancelFunc={toggleDeleteAlert}
            deleteFunc={deleteSport}
          />
        </Popup>
      )}

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

      <div className={classes["sports-listings-top"]}>
        <SportsSelection
          sportsType={sportsType}
          changeSportsType={changeSportsType}
        />
        <ActionsButtons
          firstButtonFunction={createSport}
          secondButtonFunction={toggleDeleteAlert}
          first={"Create Listing"}
          second={"Delete"}
        />
      </div>
      <Table
        reverseFlagProp={reverseFlagProp}
        sports={sports}
        selectElement={selectElement}
        paginations={paginations}
        dispatchDetail={dispatchDetail}
      />
    </div>
  );
};

export default Wrapper;
