"use client";
import React, { useState } from "react";
import FixtureAndResults from "../fixitureAndResults/FixtureAndResults";
import Standings from "../standings/Standings";
import classes from "./header.module.css";

const Header = () => {
  const [statisticsType, setStatisticsType] = useState("fixtures");

  return (
    <div>
      <div className={classes["statistics-types"]}>
        <p
          style={{
            borderBottom:
              statisticsType === "fixtures" ? "2px solid #03a1cd" : "2px solid transparent",
            color: statisticsType === "fixtures" ? "#03a1cd" : "inherit",
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
              statisticsType === "fixtures" ? "2px solid #03a1cd" : "2px solid transparent",
            color: statisticsType === "fixtures" ? "#03a1cd" : "inherit",
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
              statisticsType === "fixtures" ? "2px solid #03a1cd" : "2px solid transparent",
            color: statisticsType === "fixtures" ? "#03a1cd" : "inherit",
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
  );
};

export default Header;
