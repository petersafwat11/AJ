import Image from "next/image";
import React from "react";
import classes from "./fixtureAndResults.module.css";
const FixtureAndResults = ({ type }) => {
  return (
    <div className={classes["fixure"]}>
      <div className={classes["today"]}>
        <div className={classes["date"]}>
          <h3 className={classes["date-heading"]}>TODAY</h3>
          <p className={classes["date-para"]}>30 Aug</p>
        </div>
        {[1, 2, 3, 4].map((item, index) => (
          <div key={index} className={classes["matches"]}>
            <Match type={type} last={index == 3 ? true : false} />
          </div>
        ))}
      </div>
      <div className={classes["yesterday"]}>
        <div className={classes["date"]}>
          <h3 className={classes["date-heading"]}>TODAY</h3>
          <p className={classes["date-para"]}>30 Aug</p>
        </div>
        {[1, 2, 3, 4].map((item, index) => (
          <div key={index} className={classes["matches"]}>
            <Match last={index == 3 ? true : false} />
          </div>
        ))}
      </div>
      <div className={classes["two-days-ago"]}>
        <div className={classes["date"]}>
          <h3 className={classes["date-heading"]}>TODAY</h3>
          <p className={classes["date-para"]}>30 Aug</p>
        </div>
        {[1, 2, 3, 4].map((item, index) => (
          <div key={index} className={classes["matches"]}>
            <Match last={index == 3 ? true : false} />
          </div>
        ))}
      </div>
      <div className={classes["three-days-ago"]}>
        <div className={classes["date"]}>
          <h3 className={classes["date-heading"]}>TODAY</h3>
          <p className={classes["date-para"]}>30 Aug</p>
        </div>
        {[1, 2, 3, 4].map((item, index) => (
          <div key={index} className={classes["matches"]}>
            <Match last={index == 3 ? true : false} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FixtureAndResults;

export const Match = ({ last, type }) => {
  return (
    <div
      style={{ borderBottom: last == true ? "none" : "" }}
      className={classes["match"]}
    >
      <div className={classes["first-team"]}>
        <Image
          className={classes["first-team-image"]}
          src="/svg/teams/man-united.svg"
          alt="nfl"
          width="29"
          height="29"
        />
        <p className={classes["first-team-name"]}>Man Utd</p>
      </div>

      {type === "result" ? (
        <div className={classes["result"]}>
          <p>2</p>
          <p>-</p>
          <p>1</p>
        </div>
      ) : (
        <div className={classes["vs"]}> vs</div>
      )}
      <div className={classes["second-team"]}>
        <p className={classes["second-team-name"]}>Liverpool</p>

        <Image
          className={classes["second-team-image"]}
          src="/svg/teams/liverpool.svg"
          alt="liverpool"
          width="29"
          height="29"
        />
      </div>
      <div className={classes["match-date"]}>Aug 30 - 15:00</div>
    </div>
  );
};
