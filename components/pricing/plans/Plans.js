import Image from "next/image";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import classes from "./plans.module.css";
const Plans = () => {
  return (
    <section className={classes["plans"]}>
      <IoIosArrowBack />
      <div className={classes["freebie"]}>
        <div className={classes["plan-header"]}>
          <h4 className={classes["header-title"]}>Freebie</h4>
          <p className={classes["header-description"]}>
            ideal for individuals who want to watch sports for free
          </p>
          <h5 className={classes["price"]}>
            0$ <span className={classes["time"]}>/month</span>
          </h5>
        </div>
        <div className={classes["features"]}>
          {[
            "720p & 1080p Streams",
            "Chat Access",
            "400 + FHD Channels ",
            "No Buffer/Freezing",
            "Multiple Language Streams",
            "No adverts",
            "2k & 4k Streams ",
            "700 + FHD Channels",
            "Request Channels ",
            "24/7 Customer Support",
            "Android App",
          ].map((feature, index) => (
            <div
              key={index}
              className={
                classes[
                  index < 5 ? "supported-feature" : "not-supported-feature"
                ]
              }
            >
              {index < 5 ? (
                <Image
                  src="/svg/pricing/free-supported.svg"
                  alt="free-supported"
                  width="24"
                  height="24"
                />
              ) : (
                <Image
                  src="/svg/pricing/free-not-supported.svg"
                  alt="free-not-supported"
                  width="24"
                  height="24"
                />
              )}
              {feature}
            </div>
          ))}
        </div>
      </div>
      <div className={classes["yearly"]}>
        <div className={classes["save-money"]}>
          Save 50% <p></p>
        </div>
        <div className={classes["plan-header"]}>
          <h4 className={classes["header-title"]}>Yearly</h4>
          <p className={classes["header-description"]}>
            Ideal for individuals who want advanced features and quality on a
            yearly basis.
          </p>
          <h5 className={classes["price"]}>
            19.99$ <span className={classes["time"]}>/ Year</span>
          </h5>
        </div>
        <span className={classes["comming-soon"]}>Comming Soon </span>
        <div className={classes["features"]}>
          {[
            "All Sports & Leagues",
            "2k & 4k Streams",
            "Up to 10 devices simultaneously",
            "2500 + 4K Channels",
            "No Buffer/Freezing",
            "Multiple Language Streams",
            "No Adverts",
            "Chat Access",
            "Dedicated Streaming Servers",
            "Request Channels & Leagues",
            "24/7 Customer Support",
            "iOS & Android App",
            "VOD (Full-match replay)",
          ].map((feature, index) => (
            <div key={index} className={classes["supported-feature"]}>
              <Image
                src="/svg/pricing/premuim-supported.svg"
                alt="premuim-supported"
                width="24"
                height="24"
              />

              {feature}
            </div>
          ))}
        </div>
      </div>
      <div className={classes["monthly"]}>
        <div className={classes["plan-header"]}>
          <h4 className={classes["header-title"]}>Monthly</h4>
          <p className={classes["header-description"]}>
            Ideal for individuals who want advanced features and quality on a
            monthly basis.
          </p>
          <h5 className={classes["price"]}>
            2.99$ <span className={classes["time"]}>/ Month</span>
          </h5>
        </div>
        <div className={classes["comming-soon"]}>Comming Soon </div>

        <div className={classes["features"]}>
          {[
            "All Sports & Leagues",
            "2k & 4k Streams",
            "Up to 10 devices simultaneously",
            "2500 + 4K Channels",
            "No Buffer/Freezing",
            "Multiple Language Streams",
            "No Adverts",
            "Chat Access",
            "Dedicated Streaming Servers",
            "Request Channels & Leagues",
            "24/7 Customer Support",
            "iOS & Android App",
            "VOD (Full-match replay)",
          ].map((feature, index) => (
            <div key={index} className={classes["supported-feature"]}>
              <Image
                src="/svg/pricing/premuim-supported.svg"
                alt="premuim-supported"
                width="24"
                height="24"
              />
              {feature}
            </div>
          ))}
        </div>
      </div>
      <IoIosArrowForward />
    </section>
  );
};

export default Plans;
