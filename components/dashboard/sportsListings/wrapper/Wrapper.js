"use client";
import { usePathname, useRouter } from "next/navigation";

import React, { useCallback, useEffect, useReducer, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
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
  console.log("dataFetched", dataFetched);
  const router = useRouter();
  const pathname = usePathname();
  const [sports, setSports] = useState(dataFetched?.data?.data || []);
  const [selectedSports, setSelectedSports] = useState([]);
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [sportsType, setSportsType] = useState("Football");
  const changeSportsType = (val) => {
    setSportsType(val);
    setSearchValue("");
    dispatchDetail({ type: "CURRENT-PAGE", value: 1 });
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
  const [seacrhValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchNewData = async () => {
      const query = {
        page: paginations.currentPage,
        limit: paginations.rowsPerPage,
        sportCategory: sportsType,
        searchValue: seacrhValue,
        or: [
          "teamsTitle",
          "firstTeamName",
          "secondTeamName",
          "eventLeague",
          "eventStadium",
        ],
      };
      const newData = await getData("sports", query);
      setSports(newData?.data?.data);
      dispatchDetail({ type: "RESULTS", value: newData?.results });
    };
    fetchNewData();
  }, [
    paginations.currentPage,
    paginations.rowsPerPage,
    setSports,
    dispatchDetail,
    sportsType,
    seacrhValue,
  ]);
  const reverseFlagProp = async (itemID) => {
    flagItem(itemID, sports, setSports, "sports", notify);
  };
  const handleSearch = (val) => {
    setSearchValue(val);
  };

  const getSearchedData = useCallback(async () => {
    try {
      const newData = await getData("sports", {
        page: 1,
        limit: paginations.rowsPerPage,
        sportCategory: sportsType,
        searchValue: seacrhValue,
        or: [
          "teamsTitle",
          "firstTeamName",
          "secondTeamName",
          "eventLeague",
          "eventStadium",
        ],
      });
      dispatchDetail({
        type: "SEARCH-RESULTS",
        currentPage: 1,
        results: newData.results,
      });
      setSports(newData.data.data);
      console.log("response", newData);
    } catch (error) {
      console.log("error", error);
    }
  }, [seacrhValue, paginations.rowsPerPage, sportsType]);
  useEffect(() => {
    getSearchedData();
    console.log("search", seacrhValue);
  }, [seacrhValue, getSearchedData]);

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
        seacrhValue={seacrhValue}
        handleSearch={handleSearch}
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
