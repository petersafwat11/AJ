// "use client";
import React from "react";
import Marque from "../../../components/marque/Marque";
import TopLayout from "../../../components/topLayout/TopLayout";
import UnderDevelopment from "../../../components/underDevelopment/page/UnderDevelopment";

const page = () => {
  return (
    <div className="wrapper">
      <TopLayout />
      <div className="wrapper-2">
        <Marque />
    
        {/* <main className={classes["pricing"]}>
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
        </main> */}
        <div className="center">
          <UnderDevelopment />
        </div>
      </div>
    </div>
  );
};

export default page;
