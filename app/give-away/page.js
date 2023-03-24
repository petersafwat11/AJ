"use client";
import Image from "next/image";
import React, { useState } from "react";
import StepOne from "../../components/giveAway/stepOne/StepOne";
import StepThree from "../../components/giveAway/stepThree/StepThree";
import StepTwo from "../../components/giveAway/stepTwo/StepTwo";
import Popup from "../../components/popupWrapper/Popup";
import classes from "./page.module.css";
const GiveAway = () => {
  const [joinWebsiteGroup, setJoinWebsiteGroup] = useState(null);
  const [showSteps, setShowSteps] = useState({
    stepOne: false,
    stepTwo: false,
    stepThree: false,
  });
  const controlDisplaySteps = (value) => {
    setShowSteps(value);
  };
  const joinUsOnWebsite = (value) => {
    setJoinWebsiteGroup(value);
    setShowSteps({ ...showSteps, stepOne: true });
    console.log(value);
  };
  return (
    <main className={classes["give-away"]}>
      {(showSteps.stepOne || showSteps.stepTwo || showSteps.stepThree) && (
        <Popup >
          {showSteps.stepOne && (
            <StepOne
              joinWebsiteGroup={joinWebsiteGroup}
              controlDisplaySteps={controlDisplaySteps}
            />
          )}
          {showSteps.stepTwo && (
            <StepTwo
              joinWebsiteGroup={joinWebsiteGroup}
              controlDisplaySteps={controlDisplaySteps}
            />
          )}
          {showSteps.stepThree && (
            <StepThree controlDisplaySteps={controlDisplaySteps} />
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
                width={151}
                height={176}
              />
              <p className={classes["give-away-para"]}>
                Enter using the below methods for a chance to win a brand new
                <span>PlayStation </span> 5
              </p>
            </div>
          </div>
          <div className={classes["follow-us"]}>
            <FollowUS
              joinUsOnWebsite={joinUsOnWebsite}
              src={"/svg/give-away/id-badge.svg"}
              alt={"Id-Badge"}
              width={28}
              height={28}
              para={"Full name and email"}
              num={"+1"}
            />
            <FollowUS
              joinUsOnWebsite={joinUsOnWebsite}
              src={"/svg/give-away/mail.svg"}
              alt={"Mail"}
              width={28}
              height={28}
              para={"Join an Email Newsletter"}
              num={"+1"}
            />
            <FollowUS
              joinUsOnWebsite={joinUsOnWebsite}
              src={"/svg/give-away/telegram.svg"}
              alt={"Telegram"}
              width={28}
              height={28}
              para={"Join our Telegram Channel"}
              num={"+3"}
            />
            <FollowUS
              joinUsOnWebsite={joinUsOnWebsite}
              src={"/svg/give-away/twitter.svg"}
              alt={"Twitter"}
              width={28}
              height={28}
              para={"Follow us on Twitter"}
              num={"+4"}
            />
            <FollowUS
              joinUsOnWebsite={joinUsOnWebsite}
              src={"/svg/give-away/retweet.svg"}
              alt={"Retweet"}
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

export default GiveAway;

export const FollowUS = ({
  src,
  alt,
  width,
  height,
  para,
  num,
  joinUsOnWebsite,
}) => {
  return (
    <div
      onClick={() => {
        joinUsOnWebsite &&
          joinUsOnWebsite({
            src: src,
            text: alt,
          });
      }}
      className={classes["follow-us-method"]}
    >
      <Image
        className={classes["follow-us-method-image"]}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      <p className={classes["follow-us-method-para"]}>{para}</p>
      <p className={classes["follow-us-method-num"]}>{num}</p>
    </div>
  );
};
