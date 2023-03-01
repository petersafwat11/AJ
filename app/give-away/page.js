import Image from "next/image";
import React from "react";
import StepOne from "../../components/giveAway/stepOne/StepOne";
import StepThree from "../../components/giveAway/stepThree/StepThree";
import StepTwo from "../../components/giveAway/stepTwo/StepTwo";
import classes from "./page.module.css";
const giveAway = () => {
  return (
    <main className={classes["give-away"]}>
      <StepOne />
      <StepTwo />
      <StepThree />

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
              src={"/svg/give-away/id-badge.svg"}
              alt={"id-badge"}
              width={28}
              height={28}
              para={"Full name and email"}
              num={"+1"}
            />
            <FollowUS
              src={"/svg/give-away/mail.svg"}
              alt={"mail"}
              width={28}
              height={28}
              para={"Join an Email Newsletter"}
              num={"+1"}
            />
            <FollowUS
              src={"/svg/give-away/telegram.svg"}
              alt={"telegram"}
              width={28}
              height={28}
              para={"Join our Telegram Channel"}
              num={"+3"}
            />
            <FollowUS
              src={"/svg/give-away/twitter.svg"}
              alt={"twitter"}
              width={28}
              height={28}
              para={"Follow us on Twitter"}
              num={"+4"}
            />
            <FollowUS
              src={"/svg/give-away/retweet.svg"}
              alt={"retweet"}
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

export default giveAway;

export const FollowUS = ({ src, alt, width, height, para, num }) => {
  return (
    <div className={classes["follow-us-method"]}>
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
