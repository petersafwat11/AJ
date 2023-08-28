import React from "react";
import { getData } from "../../../../utils/dashboardTablePagesFunctions";
import Wrapper from "./Wrapper";
import classes from "./page.module.css";
const page = async () => {
  const dataFetched = await getData("channels");

  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Channels Listings</h1>
      <Wrapper dataFetched={dataFetched} />
    </div>
  );
};

export default page;
