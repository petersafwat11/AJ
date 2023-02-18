"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import classes from "./sports.module.css";
const StatisticsSports = () => {
  const router = useRouter();
  return (
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
  );
};

export default StatisticsSports;
