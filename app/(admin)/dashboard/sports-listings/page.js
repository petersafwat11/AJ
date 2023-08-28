import React from "react";
import Wrapper from "../../../../components/dashboard/sportsListings/wrapper/Wrapper";
import { getData } from "../../../../utils/dashboardTablePagesFunctions";
import classes from "./page.module.css";
const page = async () => {
  const sportsListings = await getData("sports", { sportCategory: "Football" });
  return (
    <div className={classes["sports-listing"]}>
      <h1 className={classes["title"]}>Sports Listings</h1>
      <Wrapper dataFetched={sportsListings} />
    </div>
  );
};

export default page;
