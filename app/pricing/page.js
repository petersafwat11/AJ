// "use client";
import Image from "next/image";
import React from "react";
import Marque from "../../components/marque/Marque";
import Social from "../../components/pricing/social/Social";
import InputGroup from "../../components/pricing/inputGroup/InputGroup";
import Plans from "../../components/pricing/plans/Plans";
import TopLayout from "../../components/topLayout/TopLayout";
import classes from "./pricing.module.css";

const page = () => {
  return (
    <div className={classes["wrapper"]}>
      <TopLayout />
      <div className={classes["wrapper-2"]}>
        <Marque />

        <main className={classes["pricing"]}>
          <div className={classes["top-heading"]}>
            <h2 className={classes["heading"]}>PRICING</h2>
            <span></span>
          </div>
          <section className={classes["notify-me"]}>
            <div className={classes[["container"]]}>
              <div className={classes["right"]}>
                <p className={classes["remaining-time"]}>
                  75 days : 16 hrs : 23 mins
                </p>
                <h2 className={classes["title"]}>
                  All Good Things Come to Those who Wait...
                </h2>
                <InputGroup />
              </div>
              <div className={classes["left"]}>
                <Image
                  src="/svg/pricing/rocket-icon.svg"
                  alt="faster"
                  width="297"
                  height="303"
                />
              </div>
            </div>
            <Social />
          </section>
          <span className={classes["devider"]}></span>
          <h3 className={classes["sub-title"]}>Our Packages</h3>
          <Plans />
          <span className={classes["devider-2"]}></span>

          <h3 className={classes["comming-soon"]}>
            Coming <span>Soon!</span>
          </h3>
        </main>
      </div>
    </div>
  );
};

export default page;
