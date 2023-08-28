import React from "react";
import Wrapper from "../../../components/giveAway/wrapper/Wrapper";
import Marque from "../../../components/marque/Marque";
import TopLayout from "../../../components/topLayout/TopLayout";
import { getData } from "../../../utils/dashboardTablePagesFunctions";
import classes from "./page.module.css";
const GiveAway = async () => {
  const socialLinks = await getData("links", { fields: "social" });
  return (
    <div className={classes["wrapper"]}>
      <TopLayout />
      <div className={classes["wrapper-2"]}>
        <Marque />
        <Wrapper socialLinks={socialLinks.data.data[0].social}/>
      </div>
    </div>
  );
};

export default GiveAway;
