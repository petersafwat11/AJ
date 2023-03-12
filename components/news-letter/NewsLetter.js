"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import classes from "./newsLetter.module.css";
const NewsLetter = () => {
  const [email, setEmail] = useState();
  const router = useRouter();
  return (
    <div className={classes["news-letter"]}>
      <div className={classes["container"]}>
        <div className={classes["news-letter-first"]}>
          <h3 className={classes["title"]}>
            Get Notified for Every Major Event that takes Place!
          </h3>
          <p className={classes["para"]}>
            Sign up to our email newsletter to receive regular updates on all
            the major events that arise, so you never miss out!
          </p>
        </div>
        <div className={classes["news-letter-second"]}>
          <div className={classes["notify"]}>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              style={{ color: email ? "rgba(18, 17, 39, 1)" : "" }}
              className={classes["notify-input"]}
              type="text"
              placeholder="Enter email address"
            />
            <button className={classes["notify-button"]}> Notify me</button>
          </div>
          <p className={classes["news-letter-second-para"]}>
            We care about the protection of your data. read our{" "}
            <span
              onClick={() => {
                router.push("/privacy-policy");
              }}
            >
              Privacy policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
