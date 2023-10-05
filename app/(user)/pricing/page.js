// "use client";
import Image from "next/image";
import React from "react";
import Marque from "../../../components/marque/Marque";
import PageTitle from "../../../components/pageTitle/PageTitle";
import InputGroup from "../../../components/pricing/inputGroup/InputGroup";
import Plans from "../../../components/pricing/plans/Plans";
import RemainingTime from "../../../components/pricing/remainingTime/RemainingTime";
import Social from "../../../components/pricing/social/Social";
import TopLayout from "../../../components/topLayout/TopLayout";
import classes from "./pricing.module.css";
const page = () => {
  return (
    <div className="wrapper">
      <TopLayout />
      <div className="wrapper-2">
        <Marque />

        <main className={classes["pricing"]}>
          <div className={classes["div-title"]}>
            <PageTitle title={"PRICING"} />
          </div>

          <section className={classes["notify-me"]}>
            <div className={classes[["container"]]}>
              <div className={classes["right"]}>
                <RemainingTime />
                <h2 className={classes["title"]}>
                  All Good Things Come to Those who Wait...
                </h2>
                <div className={classes["input-group"]}>
                  <InputGroup />
                </div>
              </div>
              <div className={classes["left"]}>
                <Image
                  className={classes["rocket-icon"]}
                  src="/svg/pricing/rocket-icon.svg"
                  alt="faster"
                  width="297"
                  height="303"
                />
              </div>
              <div className={classes["input-group-mobile"]}>
                <InputGroup />
              </div>
            </div>
            <Social />
          </section>
          <span className={classes["devider"]}></span>
          <h3 className={classes["sub-title"]}>Our Packages</h3>
          <div className={classes["plans"]}>
            <Plans />
          </div>
          <span className={classes["devider-2"]}></span>

          <h3 className={classes["comming-soon"]}>
            Coming <span>Soon!</span>
          </h3>
        </main>
        {/* <div className="center-under-dev">
          <UnderDevelopment />
        </div> */}
      </div>
    </div>
  );
};

export default page;
