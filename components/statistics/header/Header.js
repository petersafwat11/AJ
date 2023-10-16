"use client";
import React, { useEffect, useState } from "react";
import FixtureAndResults from "../fixitureAndResults/FixtureAndResults";
import Standings from "../standings/Standings";
import classes from "./header.module.css";

const Header = () => {
  const [statisticsType, setStatisticsType] = useState("fixtures");
  // useEffect(() => {
  //   const axios = require("axios");

  //   const options = {
  //     method: "GET",
  //     url: "https://api-football-beta.p.rapidapi.com/fixtures",
  //     params: {
  //       to: "2023-10-19",
  //       season: "2023",
  //       date: "2020-02-06",
  //     },
  //     headers: {
  //       "X-RapidAPI-Key": "ce9352625bmsh696018192ac810ap154737jsn455dc1574f86",
  //       "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
  //     },
  //   };
  //   const getData = async () => {
  //     try {
  //       const response = await axios.request(options);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getData();
  // }, []);
  return (
    <div>
      <div className={classes["statistics-types"]}>
        <p
          style={{
            borderBottom:
              statisticsType === "fixtures"
                ? "2px solid #03a1cd"
                : "2px solid transparent",
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
              statisticsType === "standings"
                ? "2px solid #03a1cd"
                : "2px solid transparent",
            color: statisticsType === "standings" ? "#03a1cd" : "inherit",
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
              statisticsType === "results"
                ? "2px solid #03a1cd"
                : "2px solid transparent",
            color: statisticsType === "results" ? "#03a1cd" : "inherit",
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
