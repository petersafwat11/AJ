import React from "react";
import ActionsButtons from "../../../components/dashboard/actionsButtons/ActionsButtons";
// import SportCategory from "../../../components/dashboard/createListings/sportCategory/SportCategory";
import Table from "../../../components/dashboard/news/table/Table";
import classes from "./page.module.css";
const page = () => {
  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>News </h1>
      <div className={classes["actions"]}>
        <ActionsButtons first={"Create Listing"} second={"Delete"} />
      </div>
      <Table />
    </div>
  );
};

export default page;
