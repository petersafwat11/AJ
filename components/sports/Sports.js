"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import classes from "./sports.module.css";
const Sports = () => {
  const router = useRouter();
  return (
    <section className={classes["sports"]}>
      <div
        onClick={() => {
          router.push("/nfl");
        }}
        className={classes["nfl"]}
      >
        <Image
          className={classes["sport-image"]}
          src="/svg/sports/nfl.svg"
          alt="nfl"
          width="60"
          height="60"
        />
        <p>NFL</p>
      </div>
      <div
        onClick={() => {
          router.push("/basketball");
        }}
        className={classes["basketball"]}
      >
        <Image
          className={classes["sport-image"]}
          src="/svg/sports/basketball.svg"
          alt="basketball"
          width="60"
          height="60"
        />
        <p>Basketball</p>
      </div>
      <div
        onClick={() => {
          router.push("/football");
        }}
        className={classes["football"]}
      >
        <Image
          className={classes["sport-image"]}
          src="/svg/sports/football.svg"
          alt="football"
          width="60"
          height="60"
        />
        <p>Football</p>
      </div>
      <div
        onClick={() => {
          router.push("/boxing&others");
        }}
        className={classes["boxing"]}
      >
        <Image
          className={classes["sport-image"]}
          src="/svg/sports/boxing.svg"
          alt="boxing"
          width="60"
          height="60"
        />
        <p>Boxing</p>
      </div>
      <div
        onClick={() => {
          router.push("/boxing&others");
        }}
        className={classes["other"]}
      >
        <Image
          className={classes["sport-image"]}
          src="/svg/sports/other.svg"
          alt="other"
          width="65"
          height="60"
        />
        <p>Others</p>
      </div>
    </section>
  );
};

export default Sports;
