"use client";
import Image from "next/image";
import React, { useReducer, useState } from "react";
import Popup from "../../popupWrapper/Popup";
import FollowUS from "../followUS/FollowUS";
import StepOne from "../stepOne/StepOne";
import StepThree from "../stepThree/StepThree";
import StepTwo from "../stepTwo/StepTwo";
import classes from "./wrapper.module.css";

const followUsReducer = (state, action) => {
  if (action.type === "INTIATOR") {
    return {
      ...state,
      steps: action.steps,
      methodData: action.methodData,
      indicatorsNum: action.indicatorsNum,
    };
  } else if (action.type === "STEPS") {
    return { ...state, steps: action.value };
  } else if (action.type === "METHOD-DATA") {
    return { ...state, methodData: action.value };
  } else if (action.type === "USER-INFO") {
    return { ...state, indicatorsNum: action.value };
  }
};

const Wrapper = ({ socialLinks }) => {
  const [joinWebsiteGroup, setJoinWebsiteGroup] = useState(null);
  const [followUs, dispatchAction] = useReducer(followUsReducer, {
    steps: null,
    indicatorsNum: null,
    methodData: null,
    userInfo: { fullName: "", email: "" },
  });
  const sendUserData = async (e) => {
    e.preventDefault();
    
  };
  return (
    <main className={classes["give-away"]}>
      {followUs.steps && (
        <Popup>
          {followUs.steps === 1 && (
            <StepOne
              userInfo={followUs.userInfo}
              indicatorsNum={followUs.indicatorsNum}
              dispatchAction={dispatchAction}
            />
          )}
          {followUs.steps === 2 && (
            <StepTwo
              indicatorsNum={followUs.indicatorsNum}
              dispatchAction={dispatchAction}
            />
          )}
          {followUs.steps === 3 && (
            <StepThree
              indicatorsNum={followUs.indicatorsNum}
              dispatchAction={dispatchAction}
            />
          )}
        </Popup>
      )}

      <div className={classes["container"]}>
        <div className={classes["give-away-heading"]}>
          <h2 className={classes["heading"]}>GIVEAWAY</h2>
          <span></span>
        </div>
        <section className={classes["give-away-wrapper"]}>
          <div className={classes["give-away-details"]}>
            <div className={classes["give-away-details-item"]}>
              <p>0</p>
              <p>Your Entries</p>
            </div>
            <div className={classes["give-away-details-item"]}>
              <p>5402 </p>
              <p>Total Entries</p>
            </div>
            <div className={classes["give-away-details-item"]}>
              <p>30 </p>
              <p>Days Left</p>
            </div>
          </div>
          <div className={classes["give-away-compition"]}>
            <span className={classes["devider"]}></span>
            <h2 className={classes["give-away-heading-2"]}>
              WIN A <span>FREE</span> PLAY STATION 5 DIGITAL EDITION
            </h2>

            <div
              style={{ marginTop: "-.6rem" }}
              className={classes["give-away-image"]}
            >
              <Image
                className={classes["give-away-center-image"]}
                src="/svg/give-away/playStation.svg"
                alt="playstation"
                width={160}
                height={190}
              />
              <p className={classes["give-away-para"]}>
                Enter using the below methods for a chance to win a brand new
                <span>PlayStation </span> 5
              </p>
            </div>
          </div>
          <div className={classes["follow-us"]}>
            <FollowUS
              //   joinUsOnWebsite={joinUsOnWebsite}
              dispatchAction={dispatchAction}
              src={"/svg/give-away/id-badge.svg"}
              alt={"Id-Badge"}
              width={28}
              height={28}
              indicatorsNum={2}
              para={"Full name and email"}
              num={"+1"}
            />
            <FollowUS
              //   joinUsOnWebsite={joinUsOnWebsite}
              dispatchAction={dispatchAction}
              src={"/svg/give-away/mail.svg"}
              alt={"Mail"}
              width={28}
              height={28}
              indicatorsNum={2}
              para={"Join an Email Newsletter"}
              num={"+1"}
            />
            <FollowUS
              //   joinUsOnWebsite={joinUsOnWebsite}
              dispatchAction={dispatchAction}
              src={"/svg/give-away/telegram.svg"}
              alt={"Telegram"}
              indicatorsNum={3}
              width={28}
              height={28}
              para={"Join our Telegram Channel"}
              num={"+3"}
            />
            <FollowUS
              //   joinUsOnWebsite={joinUsOnWebsite}
              dispatchAction={dispatchAction}
              src={"/svg/give-away/twitter.svg"}
              alt={"Twitter"}
              indicatorsNum={3}
              width={28}
              height={28}
              para={"Follow us on Twitter"}
              num={"+4"}
            />
            <FollowUS
              //   joinUsOnWebsite={joinUsOnWebsite}
              dispatchAction={dispatchAction}
              src={"/svg/give-away/retweet.svg"}
              alt={"Retweet"}
              indicatorsNum={3}
              width={28}
              height={28}
              para={"Retweet us on Twitter"}
              num={"+3"}
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Wrapper;
