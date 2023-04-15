import React from "react";
import SocialSelection from "../../../components/dashboard/facebook/social/SocialSelection";
import Table from "../../../components/dashboard/facebook/table/Table";
import classes from "./page.module.css";
const page = () => {
  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Feedback</h1>
      <SocialSelection />
      <Table />
    </div>
  );
};

export default page;
