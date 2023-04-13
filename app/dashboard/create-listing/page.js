import React from "react";
import classes from "./page.module.css";
import SportCategory from "../../../components/dashboard/createListings/SportCategory/sportCategory";
import ActionsButtons from "../../../components/dashboard/actionsButtons/ActionsButtons";
const page = () => {
  return (
    <div className={classes["create-listing"]}>
      <h1 className={classes["title"]}>Create New Listing</h1>
      <div className={classes["actions"]}>
        <ActionsButtons first={"Save"} second={"Delete"} />
      </div>
      <div className={classes["details"]}>
        <p className={classes['label']}>Listing ID: 28</p>
        <div className={classes["first"]}>
          <SportCategory />
        </div>
      </div>
    </div>
  );
};

export default page;
