"use client";
import React, { useEffect, useReducer, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { flagItem } from "../../../../utils/dashboardHelperFunctions";
import { getData } from "../../../../utils/dashboardTablePagesFunctions";
import { paginationsReducer } from "../../../../utils/paginationsReducer";
import SocialSelection from "../social/SocialSelection";
import Table from "../table/Table";
import classes from "./wrapper.module.css";

const Wrapper = ({ feedbacksFetched }) => {
  const notify = (message, type) => toast[type](message);

  const [feedbacks, setFeedbacks] = useState(feedbacksFetched?.data);
  const [paginations, dispatchDetail] = useReducer(paginationsReducer, {
    rowsPerPage: 10,
    currentPage: 1,
    results: feedbacksFetched?.results,
  });
  const [feebackType, setFeedbackType] = useState("All Feedback");
  const changeFeedbackType = (val) => {
    setFeedbackType(val);
  };
  useEffect(() => {
    const fetchNewData = async () => {
      let query;
      if (feebackType === "All Feedback") {
        query = {
          page: paginations.currentPage,
          limit: paginations.rowsPerPage,
        };
      } else if (feebackType === "Flagged") {
        query = {
          page: paginations.currentPage,
          limit: paginations.rowsPerPage,
          flagged: true,
        };
      } else {
        query = {
          page: paginations.currentPage,
          limit: paginations.rowsPerPage,
          flagged: false,
        };
      }
      const newData = await getData("feedback", query);
      setFeedbacks(newData.data.data);
      dispatchDetail({ type: "RESULTS", value: newData.results });
    };
    fetchNewData();
  }, [
    paginations.currentPage,
    paginations.rowsPerPage,
    setFeedbacks,
    dispatchDetail,
    feebackType,
  ]);

  const reverseFlagProp = async (itemID) => {
    flagItem(itemID, feedbacks, setFeedbacks, "feedback", notify);
  };

  return (
    <div className={classes["container"]}>
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

      <SocialSelection
        feebackType={feebackType}
        changeFeedbackType={changeFeedbackType}
      />
      <Table
        reverseFlagProp={reverseFlagProp}
        paginations={paginations}
        dispatchDetail={dispatchDetail}
        feedbacks={feedbacks}
      />
    </div>
  );
};

export default Wrapper;
