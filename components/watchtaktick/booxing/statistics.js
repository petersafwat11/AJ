"use client";
import React, { useState } from "react";
import FightersData from "./FightersData";
import MainEvent from "./MainEvent";
import classes from "./statistics.module.css";
const Statistics = () => {
  const [category, setCategory] = useState("main-event");
  return (
    <div className={classes["container"]}>
      <div className={classes["header"]}>
        <p
          onClick={() => {
            setCategory("main-event");
          }}
          style={{
            borderBottom: category == "main-event" ? "2px solid #03a1cd" : "",
            color: category == "main-event" ? "#03a1cd" : "",
          }}
          className={classes["header-item"]}
        >
          MAIN EVENT
          <span className={classes["ripple"]}></span>
        </p>
        <p
          onClick={() => {
            setCategory("fighters");
          }}
          style={{
            borderBottom: category == "fighters" ? "2px solid #03a1cd" : "",
            color: category == "fighters" ? "#03a1cd" : "",
          }}
          className={classes["header-item"]}
        >
          {" "}
          FIGHTERS
        </p>
      </div>
      <div className={classes["content"]}>
        {category === "main-event" ? <MainEvent /> : <FightersData />}
      </div>
    </div>
  );
};

export default Statistics;
