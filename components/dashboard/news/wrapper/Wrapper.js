"use client";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import ActionsButtons from "../../actionsButtons/ActionsButtons";
import Table from "../table/Table";
import classes from "./wrapper.module.css";

import React, { useEffect, useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  checkboxClicked,
  createItem,
  deleteItem,
  getData,
} from "../../../../utils/dashboardTablePagesFunctions";
import { paginationsReducer } from "../../../../utils/paginationsReducer";
import Popup from "../../../popupWrapper/Popup";
import DeleteAlert from "../../deleteAlert/DeleteAlert";

const Wrapper = ({ dataFetched }) => {
  const notify = (message, type) => toast[type](message);

  const router = useRouter();
  const pathname = usePathname();
  const [news, setNews] = useState(dataFetched?.data?.data || []);
  const [selectedNews, setSelectedNews] = useState([]);
  const [deleteAlert, setDeleteAlert] = useState(false);

  const selectElement = (elemID) => {
    checkboxClicked(elemID, selectedNews, setSelectedNews);
  };

  const createNews = () => {
    createItem(pathname, router);
  };

  const deleteNews = () => {
    deleteItem(news, selectedNews, setNews, setSelectedNews, "news");
    toggleDeleteAlert();
  };
  const toggleDeleteAlert = () => {
    if (selectedNews.length > 0) {
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
      };
      const newData = await getData("news", query);
      setNews(newData.data.data);
      dispatchDetail({ type: "RESULTS", value: newData.results });
    };
    fetchNewData();
  }, [
    paginations.currentPage,
    paginations.rowsPerPage,
    setNews,
    dispatchDetail,
  ]);

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
      {deleteAlert && (
        <Popup>
          <DeleteAlert cancelFunc={toggleDeleteAlert} deleteFunc={deleteNews} />
        </Popup>
      )}

      <div className={classes["actions"]}>
        <ActionsButtons
          firstButtonFunction={createNews}
          secondButtonFunction={toggleDeleteAlert}
          first={"Create Listing"}
          second={"Delete"}
        />
      </div>
      <Table
        news={news}
        selectElement={selectElement}
        paginations={paginations}
        dispatchDetail={dispatchDetail}
      />
    </div>
  );
};

export default Wrapper;
