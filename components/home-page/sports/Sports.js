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
        {pathname === "/currentEvents/nfl" && (
          <span className={classes["customized-border"]}></span>
        )}
      </div>
      <div
        onClick={() => {
          router.push("/currentEvents/basketball");
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
        {pathname === "/currentEvents/basketball" && (
          <span className={classes["customized-border"]}></span>
        )}
      </div>
      <div
        onClick={() => {
          router.push("/currentEvents/football");
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
        {pathname === "/currentEvents/football" ||
          (pathname === "/" && (
            <span className={classes["customized-border"]}></span>
          ))}
      </div>
      <div
        onClick={() => {
          router.push("/currentEvents/fights");
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
        <p>Fights</p>
        {pathname === "/currentEvents/fights" && (
          <span className={classes["customized-border"]}></span>
        )}
      </div>
      <div
        onClick={() => {
          router.push("/currentEvents/others");
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
        {pathname === "/currentEvents/others" ||
          (pathname !== "/currentEvents/football" &&
            pathname !== "/currentEvents/basketball" &&
            pathname !== "/currentEvents/nfl" &&
            pathname !== "/currentEvents/fights" &&
            pathname !== "/" && (
              <span className={classes["customized-border"]}></span>
            ))}
      </div>
    </section>
  );
};

export default Sports;
