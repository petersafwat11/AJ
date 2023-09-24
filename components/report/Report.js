"use client";
import Image from "next/image";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import classes from "./report.module.css";
const Report = ({ toggleReport, handleMakingReport }) => {
  const causes = ["Stream not working", "Wrong Match", "Lag", "Other"];
  const [cause, setCause] = useState("");
  return (
    <div className={classes["report"]}>
      <div className={classes["top"]}>
        <h2 className={classes["title"]}>Report Link</h2>
        <RxCross1 onClick={toggleReport} className={classes["exit"]} />
      </div>
      <div className={classes["causes"]}>
        {causes.map((item, index) => (
          <div
            onClick={() => {
              setCause(item);
            }}
            key={index}
            className={
              cause === item ? classes["selected-cause"] : classes["cause"]
            }
          >
            <div className={classes["icon-wrapper"]}>
              <Image
                className={classes["icon"]}
                alt="icon"
                src={`/svg/report-link/${index + 1}.svg`}
                width="23"
                height="23"
              />
            </div>
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className={classes["bottom"]}>
        <p className={classes["try-again-para"]}>
          Please try another server in the meantime!
        </p>
        <button
          onClick={() => {
            handleMakingReport(cause);
          }}
          className={classes["send-button"]}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Report;
