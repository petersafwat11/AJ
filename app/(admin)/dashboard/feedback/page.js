import React from "react";
import Wrapper from "../../../../components/dashboard/feedback/wrapper/Wrapper";
import { getData } from "../../../../utils/dashboardTablePagesFunctions";
import classes from "./page.module.css";
const page = async () => {
  const feedbacksFetched = await getData("feedback");
  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Feedback</h1>
      <Wrapper feedbacksFetched={feedbacksFetched?.data} />
    </div>
  );
};

export default page;
