import Image from "next/image";
import React from "react";
import classes from "./standings.module.css";
const Standings = () => {
  return (
    <section className={classes["standings"]}>
      <div className={classes["standings-header"]}>
        <div className={classes["standings-header-first"]}>
          <p className={classes["standings-header-para"]}>#</p>
          <p className={classes["standings-header-para"]}>Team</p>
        </div>
        <div className={classes["standings-header-second"]}>
          <p className={classes["standings-header-para"]}>PL</p>
          <p className={classes["standings-header-para"]}>P </p>
          <p className={classes["standings-header-para"]}>W</p>
          <p className={classes["standings-header-para"]}>D </p>
          <p className={classes["standings-header-para"]}>L </p>
          <p className={classes["standings-header-para"]}>GF</p>
          <p className={classes["standings-header-para"]}>GA </p>
          <p className={classes["standings-header-para"]}>Last 5</p>
          <p className={classes["standings-header-para"]}>PTS</p>
        </div>
      </div>
      <span className={classes["devider"]}></span>
      <div className={classes["standing-items"]}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(
          (item, index) => (
            <div key={index} className={classes["standings-item"]}>
              <div className={classes["standings-item-first"]}>
                <p className={classes["standings-item-para"]}>{index + 1}</p>
                <div className={classes["first-team"]}>
                  <Image
                    className={classes["first-team-image"]}
                    src="/svg/teams/man-united.svg"
                    alt="team"
                    width="24"
                    height="23"
                  />
                  <p className={classes["standings-item-para"]}>
                    Manchester United
                  </p>
                </div>
              </div>
              <div className={classes["standings-item-second"]}>
                <p className={classes["standings-item-para"]}>1</p>
                <p className={classes["standings-item-para"]}>3</p>
                <p className={classes["standings-item-para"]}>5</p>
                <p className={classes["standings-item-para"]}>3</p>
                <p className={classes["standings-item-para"]}>4</p>
                <p className={classes["standings-item-para"]}>6</p>
                <p className={classes["standings-item-para"]}>7</p>
                <div className={classes["Last-5"]}>
                  <span className={classes["conference-league"]}></span>

                  {/* <span className={classes["champions-league"]}></span> */}
                  <span className={classes["relegation"]}></span>
                  <span className={classes["relegation"]}></span>
                  <span className={classes["premier-league"]}></span>

                  {/* <span className={classes["europa-league"]}></span> */}
                  <span className={classes["conference-league"]}></span>
                </div>
                <p className={classes["standings-item-para"]}>34</p>
              </div>
            </div>
          )
        )}
      </div>
      <span className={classes["devider-2"]}></span>

      <div className={classes["standings-footer"]}>
        <div className={classes["leagues"]}>
          <div className={classes["league"]}>
            <span className={classes["champions-league"]}></span>

            <p className={classes["league-name"]}>Champions League</p>
          </div>
          <div className={classes["league"]}>
            <span className={classes["europa-league"]}></span>

            <p className={classes["league-name"]}>Europa League</p>
          </div>
          <div className={classes["league"]}>
            <span className={classes["conference-league"]}></span>

            <p className={classes["league-name"]}>Conference League</p>
          </div>
          <div className={classes["league"]}>
            <span className={classes["relegation"]}></span>

            <p className={classes["league-name"]}>Relegation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Standings;
