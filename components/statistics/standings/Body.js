import Image from "next/image";
import React from "react";
import classes from "./body.module.css";
const Body = () => {
  return (
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
              {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                <p key={index} className={classes["standings-item-para"]}>
                  {item}
                </p>
              ))}
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
            <div className={classes["standings-item-second-mobile"]}>
              {[1, 2, 3, 4, 5].map((item, index) => (
                <p key={index} className={classes["standings-item-para"]}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Body;
