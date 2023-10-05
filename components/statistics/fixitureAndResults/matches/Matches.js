import Image from "next/image";
import React from "react";
import classes from "./matches.module.css";

const Matches = ({ type }) => {
  return (
    <div className={classes["matches"]}>
      {[1, 2, 3].map((item, index) => {
        return <Match key={index} type={type} />;
      })}
    </div>
  );
};
export default Matches;

export const Match = ({ type }) => {
  return (
    <div className={classes["match"]}>
      <div className={classes["match-date"]}> 15:00</div>
      <div className={classes["match-date-mobile"]}>17:30</div>

      <div className={classes["first-team"]}>
        <p className={classes["first-team-name"]}>Man Utd</p>

        <Image
          className={classes["first-team-image"]}
          src="/svg/teams/man-united.svg"
          alt="man-united"
          width="34"
          height="34"
        />
      </div>
      <div className={classes["center"]}>
        <div className={classes["match-date-small-mobile"]}>17:30</div>

        <p className={classes["staduim"]}>Etihad Stadium</p>
        {type === "result" ? (
          <div className={classes["result"]}>
            <p>2</p>
            <p>-</p>
            <p>1</p>
          </div>
        ) : (
          <div className={classes["vs"]}> vs</div>
        )}
      </div>
      <div className={classes["second-team"]}>
        <Image
          className={classes["second-team-image"]}
          src="/svg/teams/liverpool.svg"
          alt="liverpool"
          width="27"
          height="36"
        />
        <p className={classes["second-team-name"]}>Liverpool</p>
      </div>
    </div>
  );
};
