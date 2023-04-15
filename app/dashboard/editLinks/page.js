import React from "react";
import ActionsButtons from "../../../components/dashboard/actionsButtons/ActionsButtons";
import classes from "./page.module.css";
const page = () => {
  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Channels Listings</h1>
      <div className={classes["actions"]}>
        <ActionsButtons first={"Save"} second={"Delete"} />
      </div>

      <div className={classes["details"]}>
        <div className={classes["first"]}>
          <div className={classes["details-wrapper"]}></div>
        </div>
        <div className={classes['second']}></div>
      </div>
    </div>
  );
};

export default page;
