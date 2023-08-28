import React from "react";
import Wrapper from "../../../../components/dashboard/reportedLinks/wrapper/Wrapper";
import { getData } from "../../../../utils/dashboardTablePagesFunctions";

import classes from "./page.module.css";
const page = async () => {
  const reportedLinks = await getData("reportedLinks");

  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Reported Links</h1>
      <Wrapper dataFetched={reportedLinks}  />
    </div>
  );
};

export default page;
