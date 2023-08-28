import React from "react";
import { getData } from "../../../../utils/dashboardTablePagesFunctions";
import Wrapper from "./Wrapper";
import classes from "./page.module.css";
const page = async () => {
  const peopleContactedUs = await getData("contact-us");
  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Newsletter </h1>
      <Wrapper peopleContactedUs={peopleContactedUs} />
    </div>
  );
};

export default page;
