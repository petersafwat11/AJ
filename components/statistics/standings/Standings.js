import Image from "next/image";
import React from "react";
import classes from "./standings.module.css";
const Standings = () => {
  return (
    <section className={classes["standings"]}>
      <div className={classes["standings-header"]}>
        <div className={classes["standings-header-first"]}>
          <p className={classes["standings-header-para"]}>Position</p>
          <p className={classes["standings-header-para"]}>Team</p>
        </div>
        <div className={classes["standings-header-second"]}>
          <p className={classes["standings-header-para"]}>Played</p>
          <p className={classes["standings-header-para"]}>Won </p>
          <p className={classes["standings-header-para"]}>Drawn</p>
          <p className={classes["standings-header-para"]}>Lost </p>
          <p className={classes["standings-header-para"]}>GF</p>
          <p className={classes["standings-header-para"]}>GA </p>
          <p className={classes["standings-header-para"]}>Points</p>
          <p className={classes["standings-header-para"]}>Next Game</p>
        </div>
      </div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(
        (item, index) => (
          <div key={index} className={classes["standings-item"]}>
            <div className={classes["standings-item-first"]}>
              <p className={classes["standings-item-para"]}>01</p>
              <div className={classes["first-team"]}>
                <Image
                  className={classes["news-item-image"]}
                  src="/svg/teams/man-united.svg"
                  alt="team"
                  width="23"
                  height="23"
                />
                <p className={classes["standings-item-para"]}>Man Utd</p>
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
              <Image
                className={classes["news-item-image"]}
                src="/svg/teams/liverpool.svg"
                alt="team"
                width="23"
                height="23"
              />
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default Standings;
