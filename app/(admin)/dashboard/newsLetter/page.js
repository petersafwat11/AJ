import React from "react";
import { getData } from "../../../../utils/dashboardTablePagesFunctions";
import Wrapper from "./Wrapper";
import classes from "./page.module.css";
const page = async () => {
  const peopleContactedUs = await getData("contact-us");
  const newsLetterFetchedData = await getData("newsletter");
  
  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Newsletter </h1>
      <Wrapper
        peopleContactedUs={peopleContactedUs}
        newsLetterFetchedData={newsLetterFetchedData}
      />
    </div>
  );
};

export default page;
