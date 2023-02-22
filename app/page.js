"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Match from "../components/match/Match";
import Sports from "../components/sports/Sports";
import classes from "./page.module.css";
const Page = () => {
  const router = useRouter();
  return (
    <div className={classes["container"]}>
      <div className={classes["search-mobile"]}>
        <input
          className={classes["search-mobile-input"]}
          type="text"
          placeholder="Enter keyword..."
        />
        <button className={classes["search-mobile-button"]}>SEARCH</button>
      </div>
      <div className={classes["top-screen"]}>
        <div className={classes["top-screen-live-icon"]}>
          <Image src="/svg/live.svg" alt="live" width="29" height="32" />
        </div>
        <Sports />
      </div>
      <div className={classes["matches-container"]}>
        <section className={classes["hot-matches"]}>
          <h2 className={classes["title"]}>HOT MATCHES</h2>
          <span className={classes["time-zone"]}>Timezone: UTC +7</span>
          <div className={classes["matches"]}>
            {[1, 2, 3].map((i) => (
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
    </div>
  );
};

export default Page;
