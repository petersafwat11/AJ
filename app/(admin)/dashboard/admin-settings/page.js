"use client";
import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ActionsButtons from "../../../../components/dashboard/actionsButtons/ActionsButtons";
import ChangePassword from "../../../../components/dashboard/adminSettings/changePassword/ChangePassword";
import Table from "../../../../components/dashboard/adminSettings/table/Table";
import DeleteAlert from "../../../../components/dashboard/deleteAlert/DeleteAlert";
import Popup from "../../../../components/popupWrapper/Popup";
import {
  checkboxClicked,
  deleteItem,
  getData,
} from "../../../../utils/dashboardTablePagesFunctions";

import Cookies from "js-cookie";
import { paginationsReducer } from "../../../../utils/paginationsReducer";
import classes from "./page.module.css";
import Administrator from "../../../../components/dashboard/adminSettings/administrator/Administrator";

const userIntialValue = {
  name: "",
  email: "",
  role: "",
  password: "",
};
const AdministratorReducer = (state, action) => {
  console.log("action", action, state);
  if (action.type === "UPDATE-ALL") {
    return action.value;
  } else if (action.type === "CLEAR-ALL") {
    return userIntialValue;
  } else {
    return { ...state, [action.type.toLowerCase()]: action.value };
  }
};

const Page = () => {
  const notify = (message, type) => toast[type](message);
  const [password, setPassword] = useState({
    passwordCurrent: "",
    password: "",
    passwordConfirm: "",
  });
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [editPopup, setEditPopup] = useState(false);
  const [administrators, setAdministrators] = useState([]);
  const [selectedAdministrators, setSelectedAdministrators] = useState([]);

  const selectElement = (elemID) => {
    checkboxClicked(elemID, selectedAdministrators, setSelectedAdministrators);
  };

  const [administratorAddition, dispatchAddition] = useReducer(
    AdministratorReducer,
    userIntialValue
  );
  const [administratorEditing, dispatchEditing] = useReducer(
    AdministratorReducer,
    userIntialValue
  );
  const [paginations, dispatchDetail] = useReducer(paginationsReducer, {
    rowsPerPage: 10,
    currentPage: 1,
    results: 0,
  });
  useEffect(() => {
    const fetchNewData = async () => {
      const query = {
        page: paginations.currentPage,
        limit: paginations.rowsPerPage,
      };
      const newData = await getData("users", query);
      setAdministrators(newData?.data?.data);
      dispatchDetail({ type: "RESULTS", value: newData?.results });
    };
    fetchNewData();
  }, [
    paginations.currentPage,
    paginations.rowsPerPage,
    setAdministrators,
    dispatchDetail,
  ]);
  const deleteAdministrator = () => {
    deleteItem(
      administrators,
      selectedAdministrators,
      setAdministrators,
      setSelectedAdministrators,
      "users"
    );
    toggleDeleteAlert();
  };
  const toggleDeleteAlert = () => {
    if (selectedAdministrators.length > 0) {
      setDeleteAlert(!deleteAlert);
    } else {
      notify("you have not selected any item to delete", "warning");
    }
  };
  const saveAdministrator = async (type, data, dispatchAction) => {
    let request;
    if (type === "edit") {
      request = axios.patch(
        `${process.env.BACKEND_SERVER}/users/${data._id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
    } else {
      request = axios.post(`${process.env.BACKEND_SERVER}/users`, data, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
    }
    try {
      const NewAdministrator = await request;
      dispatchAction({ type: "CLEAR-ALL" });
      notify("item saved successfully.", "success");
      console.log("success", NewAdministrator);
    } catch (error) {
      notify(
        error.response.data.error?.errors
          ? Object.values(error.response.data.error.errors)[0].message
          : error.response.data.message,
        "error"
      );

      console.log("error", error);
    }
  };
  const makeNewAdministrator = async () => {
    await saveAdministrator("create", administratorAddition, dispatchAddition);
    setEditPopup(!editPopup);
  };
  const updateAdministrator = async () => {
    await saveAdministrator("edit", administratorEditing, dispatchEditing);
    setEditPopup(!editPopup);
  };
  const editToggler = (administrator) => {
    dispatchEditing({ type: "UPDATE-ALL", value: administrator });
    setEditPopup(!editPopup);
  };
  const cancelEditing = () => {
    dispatchEditing({ type: "CLEAR-ALL" });
    setEditPopup(!editPopup);
  };
  const handleChangePassword = (password) => {
    setPassword(password);
  };
  const changePasswordHandler = async () => {
    try {
      const response = await axios.patch(
        `${process.env.BACKEND_SERVER}/users/updateMyPassword`,
        password,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      console.log(response);
      setPassword({
        passwordCurrent: "",
        password: "",
        passwordConfirm: "",
      });
      notify("password updated successfully.", "success");
    } catch (error) {
      console.log("err", error);
      notify(error.response.data.message, "error");
    }
  };
  return (
    <div className={classes["container"]}>
      {deleteAlert && (
        <Popup>
          <DeleteAlert
            cancelFunc={toggleDeleteAlert}
            deleteFunc={deleteAdministrator}
          />
        </Popup>
      )}
      {editPopup && (
        <Popup>
          <Administrator
            cancelEditing={cancelEditing}
            edit={true}
            saveActions={updateAdministrator}
            Administrator={administratorEditing}
            dispatchAction={dispatchEditing}
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

      <h1 className={classes["title"]}>Admin Settings</h1>
      <div className={classes["actions"]}>
        <ActionsButtons first={"Save"} />
      </div>
      <div className={classes["details"]}>
        <ChangePassword
          data={password}
          changePassword={handleChangePassword}
          changePasswordHandler={changePasswordHandler}
        />
        <Administrator
          saveActions={makeNewAdministrator}
          Administrator={administratorAddition}
          dispatchAction={dispatchAddition}
        />
      </div>
      <h2 className={classes["sub-heading"]}>Members</h2>
      <Table
        editToggler={editToggler}
        toggleDeleteAlert={toggleDeleteAlert}
        administrators={administrators}
        selectElement={selectElement}
        paginations={paginations}
        dispatchDetail={dispatchDetail}
      />
    </div>
  );
};

export default Page;
