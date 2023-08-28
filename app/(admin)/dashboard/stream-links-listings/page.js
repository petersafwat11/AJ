import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { getData } from "../../../../utils/dashboardTablePagesFunctions";
import classes from "./page.module.css";
import Wrapper from "./Wrapper";


const Page = async () => {
  const dataFetched = await getData("streamLink");
  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Channels Listings</h1>
      <Wrapper dataFetched={dataFetched} />
    </div>
  );
};

export default Page;
