"use client";
import React, { useState } from "react";
import LeagueMenu from "../../components/leage/League";
import FixtureAndResults from "../../components/statistics/fixitureAndResults/FixtureAndResults";
import Standings from "../../components/statistics/standings/Standings";
import TopLayout from "../../components/topLayout/TopLayout";
import classes from "./statistics.module.css";

const Statistics = () => {
  const [statisticsType, setStatisticsType] = useState("fixtures");
  return (
    <div className={classes["wrapper"]}>
      <TopLayout />
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
                  statisticsType === "standings" ? "2px solid #03a1cd" : "",
                color: statisticsType === "standings" ? "#03a1cd" : "",
              }}
            >
              STANDINGS
            </p>

            <p
              onClick={() => {
                setStatisticsType("results");
              }}
              style={{
                borderBottom:
                  statisticsType === "results" ? "2px solid #03a1cd" : "",
                color: statisticsType === "results" ? "#03a1cd" : "",
              }}
              className={classes["statistics-type"]}
            >
              RESULTS
            </p>
          </div>
          {statisticsType == "fixtures" ? (
            <FixtureAndResults type={"fixture"} />
          ) : statisticsType == "standings" ? (
            <Standings />
          ) : (
            <FixtureAndResults type={"result"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
