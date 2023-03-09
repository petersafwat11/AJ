"use client";
import React, { useState } from "react";
import LeagueMenu from "../../components/leage/League";
import FixtureAndResults from "../../components/statistics/fixitureAndResults/FixtureAndResults";
import Standings from "../../components/statistics/standings/Standings";
import classes from "./statistics.module.css";

const Statistics = () => {
  const [statisticsType, setStatisticsType] = useState("fixtures");
  return (
    <div className={classes["statistics"]}>
      <div className={classes["container"]}>
        {/* <StatisticsSports /> */}
        <LeagueMenu />
        <div className={classes["statistics-types"]}>
          <p
            style={{
              borderBottom:
                statisticsType === "fixtures" ? "2px solid #03a1cd" : "",
              color: statisticsType === "fixtures" ? "#03a1cd" : "",
            }}
            onClick={() => {
              setStatisticsType("fixtures");
            }}
            className={classes["statistics-type"]}
          >
            FIXTURES
          </p>
          <p
            onClick={() => {
              setStatisticsType("standings");
            }}
            className={classes["statistics-type"]}
            style={{
              borderBottom:
                statisticsType === "fixtures" ? "2px solid #03a1cd" : "",
              color: statisticsType === "fixtures" ? "#03a1cd" : "",
            }}
          >
            STANDINGS
          </p>

          <p
            style={{
              borderBottom:
                statisticsType === "fixtures" ? "2px solid #03a1cd" : "",
              color: statisticsType === "fixtures" ? "#03a1cd" : "",
            }}
            className={classes["statistics-type"]}
          >
            RESULTS
          </p>
        </div>
        {statisticsType == "fixtures" ? <FixtureAndResults /> : <Standings />}
      </div>
    </div>
  );
};

export default Statistics;
