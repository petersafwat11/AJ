import Image from "next/image";
import React from "react";
import classes from "./page.module.css";
const page = () => {
  return (
    <div className={classes["container"]}>
      <div className={classes["top-screen"]}>
        {/* <div className={classes["top-screen-live-icon"]}>
          <Image src="/svg/live.svg" alt="live" width="29" height="32" />
        </div> */}
        <section className={classes["sports"]}>
          <div className={classes["sport-element"]}>
            <Image
              className={classes["sport-image"]}
              src="/svg/sports/nfl.svg"
              alt="nfl"
              width="86"
              height="72"
            />
            <p>Nfl</p>
          </div>
          <div className={classes["sport-element"]}>
            <Image
              className={classes["sport-image"]}
              src="/svg/sports/basketball.svg"
              alt="nfl"
              width="86"
              height="72"
            />
            <p>Basketball</p>
          </div>
          <div className={classes["sport-element"]}>
            <Image
              className={classes["sport-image"]}
              src="/svg/sports/football.svg"
              alt="nfl"
              width="86"
              height="72"
            />
            <p>Football</p>
          </div>
          <div className={classes["sport-element"]}>
            <Image
              className={classes["sport-image"]}
              src="/svg/sports/boxing.svg"
              alt="nfl"
              width="86"
              height="72"
            />
            <p>Boxing</p>
          </div>
          <div className={classes["sport-element"]}>
            <Image
              className={classes["sport-image"]}
              src="/svg/sports/other.svg"
              alt="nfl"
              width="86"
              height="72"
            />
            <p>Others</p>
          </div>
        </section>
      </div>
      <section className={classes["hot-matches"]}>
        <h2 className={classes["title"]}>Hot Matches</h2>
        <span className={classes["time-zone"]}>Timezone: UTC +7</span>
        <div className={classes["matches"]}>
          {[1, 2, 3, 4].map((i) => (
            <>
              <Match />
            </>
          ))}
        </div>
      </section>
      <section className={classes["other-matches"]}>
        <h2 className={classes["title"]}>OTHER MATCHES</h2>
        <span className={classes["time-zone"]}>Timezone: UTC +7</span>
        <div className={classes["matches"]}>
          {[1, 2, 3, 4].map((i) => (
            <>
              <Match />
            </>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;

export const Match = () => {
  return (
    <div className={classes["match"]}>
      <div className={classes["match-first"]}>
        {/* <div className={classes["match-details"]}>
          <p className="date">Aug 18 - 15:00</p>
          <p className={classes["leage"]}>Premeir League</p>
          <div className={classes["status"]}>2nd Half: 47’</div>
        </div> */}
      </div>
      <div className={classes["match-second"]}>
        <div className={classes["match-details"]}>
          <p className="date">Aug 18 - 15:00</p>
          <p className={classes["leage"]}>Premeir League</p>
        </div>
        <div className="live-button-div">
          <div className={classes["live-button"]}>
            <span></span>
            <p>Live</p>
          </div>
        </div>
        <div className={classes["first-team"]}>
          <Image
            className={classes["first-team-image"]}
            src="/svg/teams/man-united.svg"
            alt="nfl"
            width="40"
            height="40"
          />
          <p className={classes["first-team-name"]}>Man Utd</p>
        </div>
        <div className={classes["match-vs"]}>vs</div>
        <div className={classes["second-team"]}>
          <p className={classes["second-team-name"]}>Man Utd</p>

          <Image
            className={classes["second-team-image"]}
            src="/svg/teams/liverpool.svg"
            alt="nfl"
            width="40"
            height="40"
          />
        </div>
        <div className={classes["status"]}>2nd Half: 47’</div>
        <div className={classes["action-button"]}>
          <button className={classes["watch-button"]}>watch</button>
        </div>
      </div>
    </div>
  );
};
