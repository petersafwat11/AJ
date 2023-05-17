import React from "react";
import ActionsButtons from "../../../components/dashboard/actionsButtons/ActionsButtons";
import ChangePassword from "../../../components/dashboard/adminSettings/changePassword/ChangePassword";
import CreateUserAccounnt from "../../../components/dashboard/adminSettings/createUserAccounnt/CreateUserAccounnt";
import Table from "../../../components/dashboard/adminSettings/table/Table";
import classes from "./page.module.css";
const page = () => {
  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Admin Settings</h1>
      <div className={classes["actions"]}>
        <ActionsButtons first={"Save"} />
      </div>
      <div className={classes["details"]}>
        <ChangePassword />
        <CreateUserAccounnt />
      </div>
      <h2 className={classes["sub-heading"]}>Members</h2>
      <Table />
    </div>
  );
};

export default page;
