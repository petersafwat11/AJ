import React from "react";
// import SportCategory from "../../../../components/dashboard/createListings/sportCategory/SportCategory";
import { getData } from "../../../../utils/dashboardTablePagesFunctions";

import classes from "./page.module.css";
import Wrapper from "../../../../components/dashboard/news/Wrapper/Wrapper";
const page = async () => {
  const news = await getData("news");

  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>News </h1>
      <Wrapper dataFetched={news} />
    </div>
  );
};

export default page;
