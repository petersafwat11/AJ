import React from "react";
import ActionsButtons from "../../../components/dashboard/actionsButtons/ActionsButtons";
import Table from "../../../components/dashboard/channelsListings/table/Table";
import classes from "./page.module.css";
const page = () => {
  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Channels Listings</h1>
      <div className={classes["actions"]}>
        <ActionsButtons first={"Save"} second={"Delete"} />
      </div>
      <Table />
    </div>
  );
};

export default page;
