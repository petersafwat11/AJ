import Image from "next/image";
import React from "react";
import StatisticsSports from "../../components/statistics-sport/statistics-sports";
import classes from "./statistics.module.css";
const statistics = () => {
  return (
    <div className={classes["statistics"]}>
      <div className={classes["container"]}>
        <StatisticsSports />
        <div className={classes["most-important-lieges"]}>
          <Image
            src="/svg/statistics/uefa.svg"
            alt="uefa"
            height="40"
            width="40"
          />
          <Image
            src="/svg/statistics/uefa.svg"
            alt="uefa"
            height="40"
            width="40"
          />
          <Image
            src="/svg/statistics/uefa.svg"
            alt="uefa"
            height="40"
            width="40"
          />
          <Image
            src="/svg/statistics/uefa.svg"
            alt="uefa"
            height="40"
            width="40"
          />
          <Image
            src="/svg/statistics/uefa.svg"
            alt="uefa"
            height="40"
            width="40"
          />
        </div>
        <div className={classes["statistics-types"]}>
          <p className={classes["statistics-type"]}>FIXTURES</p>
          <p className={classes["statistics-type"]}>STANDINGS</p>
          <p className={classes["statistics-type"]}>RESULTS</p>
        </div>
      </div>
    </div>
  );
};

export default statistics;
