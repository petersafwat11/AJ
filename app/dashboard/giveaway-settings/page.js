import React from "react";
import ActionsButtons from "../../../components/dashboard/actionsButtons/ActionsButtons";
import RNG from "../../../components/dashboard/giveaway/RNG/RNG";
import Date from "../../../components/dashboard/giveaway/date/date";
import Description from "../../../components/dashboard/giveaway/description/Description";
import PrizeImage from "../../../components/dashboard/giveaway/prizeImage/PrizeImage";
import Reset from "../../../components/dashboard/giveaway/reset/reset";
import Table from "../../../components/dashboard/giveaway/table/Table";
import Title from "../../../components/dashboard/giveaway/title/Title";
import classes from "./page.module.css";
const page = () => {
  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Giveaway Settings </h1>
      <div className={classes["actions"]}>
        <ActionsButtons first={"Save"} />
      </div>
      <div className={classes["wrapper"]}>
        <Title />
        <div className={classes["description"]}>
          <Description />
        </div>
        <div className={classes["details"]}>
          <Date />
          <PrizeImage />
          <Reset />
        </div>
      </div>

      <div className={classes["table"]}>
        <h2 className={classes["sub-heading"]}>Random Winner Generator</h2>
        <Table />
      </div>
      <h2 className={classes["sub-heading"]}>Random Winner Generator</h2>
      <RNG />
    </div>
  );
};

export default page;
