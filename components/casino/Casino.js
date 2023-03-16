import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import classes from "./casino.module.css";
const Casino = () => {
  return (
    <div className={classes["casino"]}>
      <img
        className={classes["background"]}
        src="/svg/Subscribe-2.svg"
        alt="background"
      />
      <img
        className={classes["background-mobile"]}
        src="/svg/Subscribe-mobile-2.svg"
        alt="background"
      />

      <p className={classes["para"]}>The best casino & sports betting </p>
      <h2 className={classes["title"]}>WELCOME BONUS UP TO 5 BTC</h2>
      <button className={classes["button"]}>
        Play now <BiRightArrowAlt className={classes["right-arrow"]} />{" "}
      </button>
    </div>
  );
};

export default Casino;
