import React from "react";
import Table from "../../../../components/dashboard/reportedLinks/table/Table";
import classes from "./page.module.css";
const page = () => {
  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Reported Links</h1>
      <Table />
    </div>
  );
};

export default page;
