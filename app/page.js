"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Match from "../components/match/match";
import classes from "./page.module.css";
const Page = () => {
  const router = useRouter();
  return (
    <div className={classes["container"]}>
      <div className={classes["top-screen"]}>
        <div className={classes["top-screen-live-icon"]}>
          <Image src="/live.png" alt="live" width="29" height="32" />
        </div>
        <section className={classes["sports"]}>
          <div
            onClick={() => {
              router.push("/nfl");
            }}
            className={classes["sport-element"]}
          >
            <Image
              className={classes["sport-image"]}
              src="/svg/sports/nfl.svg"
              alt="nfl"
              width="65"
              height="52"
            />
            <p>Nfl</p>
          </div>
          <div
            onClick={() => {
              router.push("/basketball");
            }}
            className={classes["sport-element"]}
          >
            <Image
              className={classes["sport-image"]}
              src="/svg/sports/basketball.svg"
              alt="nfl"
              width="65"
              height="52"
            />
            <p>Basketball</p>
          </div>
          <div
            onClick={() => {
              router.push("/football");
            }}
            className={classes["sport-element"]}
          >
            <Image
              className={classes["sport-image"]}
              src="/svg/sports/football.svg"
              alt="nfl"
              width="65"
              height="52"
            />
            <p>Football</p>
          </div>
          <div
            onClick={() => {
              router.push("/boxing");
            }}
            className={classes["sport-element"]}
          >
            <Image
              className={classes["sport-image"]}
              src="/svg/sports/boxing.svg"
              alt="boxing"
              width="65"
              height="52"
            />
            <p>Boxing</p>
          </div>
          <div
            onClick={() => {
              router.push("/other");
            }}
            className={classes["sport-element"]}
          >
            <Image
              className={classes["sport-image"]}
              src="/svg/sports/other.svg"
              alt="other"
              width="65"
              height="52"
            />
            <p>Others</p>
          </div>
        </section>
      </div>
      <div className={classes["matches-container"]}>
        <section className={classes["hot-matches"]}>
          <h2 className={classes["title"]}>HOT MATCHES</h2>
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
    </div>
  );
};

export default Page;
