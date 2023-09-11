"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Marque from "../../../components/marque/Marque";
import TopLayout from "../../../components/topLayout/TopLayout";
import UnderDevelopment from "../../../components/underDevelopment/page/UnderDevelopment";
import classes from "./news.module.css";
const Page = () => {
  const [showSendMessage, setShowSendMessage] = useState(false);

  return (
    <div className="wrapper">
      <TopLayout />
      <div className="wrapper-2">
        <Marque />

        <main className={classes["news"]}>
          <div className={classes["top-heading"]}>
            <h2 className={classes["heading"]}>NEWS</h2>
            <span></span>
          </div>
          {/* <div className="wrapper">
            <div className={classes["container"]}>
              <div className={classes["news-items"]}>
                {[1, 2, 3, 4, 5].map((i, index) => (
                  <>
                    <NewsItem
                      index={index}
                      src={"/svg/boxers.svg"}
                      alt={"photo"}
                      heading={"Sports News Title 1"}
                      para={
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                      }
                    />
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className={classes["paginations"]}>
            <div className={classes["paginations-options"]}>
              <div className={classes["previous"]}>
                <MdKeyboardArrowLeft className={classes["arrow"]} />
                <p className={classes["paginations-option"]}>Previous</p>
              </div>
              <p className={classes["paginations-option"]}>1</p>
              <p className={classes["paginations-option"]}>2</p>
              <p className={classes["paginations-option"]}>3</p>
              <p className={classes["paginations-option"]}>4</p>
              <p>...</p>
              <p className={classes["paginations-option"]}>10</p>
              <div className={classes["next"]}>
                <p className={classes["paginations-option"]}>Next</p>
                <RiArrowRightSLine className={classes["arrow"]} />
              </div>
            </div>
          
          </div> */}
          <div className="center-under-dev">
            <UnderDevelopment />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;
export const NewsItem = ({ src, alt, heading, para, index }) => {
  const router = useRouter();
  return (
    <div
      style={{ background: (index + 1) % 2 == 0 ? "#182228" : "inherit" }}
      onClick={() => {
        router.push("/news/1");
      }}
      className={classes["news-item"]}
    >
      <Image
        className={classes["news-item-image"]}
        src={src}
        alt={alt}
        width="108"
        height="85"
      />
      <div className={classes["news-item-content"]}>
        <h3 className={classes["news-item-heading"]}>{heading}</h3>
        <p className={classes["news-item-para"]}>{para}</p>
      </div>
    </div>
  );
};
