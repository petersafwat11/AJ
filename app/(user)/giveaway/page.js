import React from "react";
import Marque from "../../../components/marque/Marque";
import TopLayout from "../../../components/topLayout/TopLayout";
import UnderDevelopment from "../../../components/underDevelopment/page/underDevelopment";
import { getData } from "../../../utils/dashboardTablePagesFunctions";
import classes from "./page.module.css";
const GiveAway = async () => {
  const socialLinks = await getData("links", { fields: "social" });
  return (
    <div className={classes["wrapper"]}>
      <TopLayout />
      <div className={classes["wrapper-2"]}>
        <Marque />
        <div className="center">
          <UnderDevelopment />
        </div>

        {/* <Wrapper socialLinks={socialLinks.data.data[0].social}/> */}
      </div>
    </div>
  );
};

export default GiveAway;
