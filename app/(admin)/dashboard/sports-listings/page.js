import React from "react";
import ActionsButtons from "../../../../components/dashboard/actionsButtons/ActionsButtons";
import SportsSelection from "../../../../components/dashboard/sportsSelection/SportsSelection";
import Table from "../../../../components/dashboard/table/Table";
import classes from "./page.module.css";
const page = () => {
  return (
    <div className={classes["sports-listing"]}>
      <h1 className={classes["title"]}>Sports Listings</h1>
      <div className={classes["sports-listings-top"]}>
        <SportsSelection />
        <ActionsButtons first={"Create Listing"} second={"Delete"} />
      </div>
      <Table />
    </div>
  );
};

export default page;
