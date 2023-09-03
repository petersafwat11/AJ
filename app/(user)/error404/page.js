"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Marque from "../../../components/marque/Marque";
import TopLayout from "../../../components/topLayout/TopLayout";
import classes from "./error.module.css";
const Page = () => {
  const router = useRouter();

  return (
    <div className="wrapper">
      <TopLayout />
      <div className="wrapper-2">
        <Marque />

        <div className={classes["error"]}>
          <div className={classes["first-section"]}>
            <h2 className={classes["title"]}>Error 404 - Page Not Found</h2>
            <p className={classes["error-message"]}>
              Maybe this page moved? Got deleted? Is hiding out in quarantine?
              Never existed in the first place?
            </p>
          </div>
          <div className={classes["second-section"]}>
            <p className={classes["return-para"]}>
              Let&#x27;s go{" "}
              <span
                onClick={() => {
                  router("/");
                }}
              >
                home
              </span>{" "}
              and try from there.
            </p>
            <button
              onClick={() => {
                router.push("/");
              }}
              className={classes["button"]}
            >
              HOME
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
