'use client'
import Image from "next/image";
import React, { useState} from "react";
import LeagueMenu from "../../components/leage/League";
import StatisticsSports from "../../components/statistics-sport/statistics-sports";
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
          >
            STANDINGS
          </p>
          <p className={classes["statistics-type"]}>RESULTS</p>
        </div>
        {statisticsType == "fixtures" ? <FixtureAndResults /> : <Standings />}
      </div>
    </div>
  );
};

export default Statistics;
