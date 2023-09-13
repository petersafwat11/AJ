"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import classes from "./sports.module.css";

const Sports = ({ sportCategory }) => {
  const pathname = usePathname();
  const router = useRouter();
  console.log("path", pathname);
  return (
    <section className={classes["sports"]}>
      <div
        onClick={() => {
          router.push("/currentEvents/nfl");
        }}
        className={
          pathname === "/currentEvents/nfl" || sportCategory === "NFL"
            ? classes["selected"]
            : classes["nfl"]
        }
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
          router.push("/currentEvents/basketball");
        }}
        className={
          pathname === "/currentEvents/basketball" ||
          sportCategory === "Basketball"
            ? classes["selected"]
            : classes["basketball"]
        }
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
          router.push("/currentEvents/football");
        }}
        className={
          pathname === "/currentEvents/football" || sportCategory === "Football"
            ? classes["selected"]
            : classes["football"]
        }
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
          router.push("/currentEvents/boxing");
        }}
        className={
          pathname === "/currentEvents/boxing" || sportCategory === "Boxing"
            ? classes["selected"]
            : classes["boxing"]
        }
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
          router.push("/currentEvents/others");
        }}
        className={
          pathname === "/currentEvents/others" ||
          (sportCategory !== "Football" &&
            sportCategory !== "Basketball" &&
            sportCategory !== "NFL" &&
            sportCategory !== "Boxing")
            ? classes["selected"]
            : classes["other"]
        }
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
