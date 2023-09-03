import React from "react";
import LeagueMenu from "../../../components/leage/League";
import Marque from "../../../components/marque/Marque";
import Header from "../../../components/statistics/header/Header";
import TopLayout from "../../../components/topLayout/TopLayout";
import classes from "./statistics.module.css";

const Statistics = () => {
  return (
    <div className="wrapper">
      <TopLayout />
      <div className="wrapper-2">
        <Marque />

        <div className={classes["statistics"]}>
          <LeagueMenu />
          <Header />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
