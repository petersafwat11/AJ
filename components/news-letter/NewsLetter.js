import React from "react";
import classes from "./newsLetter.module.css";
const NewsLetter = () => {
  return (
    <div className={classes["news-letter"]}>
      <div className={classes["news-letter-first"]}>
        <h3 className={classes["title"]}>
          Get Notified for Every Major Event that takes Place!
        </h3>
        <p className={classes["para"]}>
          Sign up to our email newsletter to receive regular updates on all the
          major events that arise, so you never miss out!
        </p>
      </div>
      <div className={classes["news-letter-second"]}>
        <div className={classes["notify"]}>
          <input
            className={classes["notify-input"]}
            type="text"
            placeholder="Enter email address"
          />
          <button className={classes["notify-input"]}> Notify me</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
