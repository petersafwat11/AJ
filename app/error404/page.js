"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Popup from "../../components/popupWrapper/Popup";
import SendMessage, { SendMessageButton } from "../../components/send-message/SendMessage";
import classes from "./error.module.css";
import TopLayout from "../../components/topLayout/TopLayout";
const Page = () => {
  const router = useRouter();

  return (
    <div className={classes["wrapper"]}>
      <TopLayout/>
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
  );
};

export default Page;
