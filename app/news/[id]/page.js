import Image from "next/image";
import React from "react";
import classes from "./news-article.module.css";
const page = () => {
  return (
    <div className={classes["news-article"]}>
      <div className={classes["top-heading"]}>
        <h2 className={classes["top-heading-title"]}>NEWS</h2>
        <span></span>
      </div>
      <div className={classes["container"]}>
        <div className={classes["article-top"]}>
          <Image
            className={classes["article-top-icon"]}
            src="/svg/arrow-circle-left.svg"
            alt="arrow"
            width="25"
            height="25"
          />
          <h2 className={["news-article-heading"]}>
            2022-2023 Serie A Week 2: Match Highlights
          </h2>
          <span>Posted by AJ Sports Admin</span>
        </div>
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            style={{
              background: i % 2 == 0 ? "#182228" : "inherit",
              position: i == 5 ? "relative" : "",
              paddingBottom: i==5 ? '5rem ' : ''
            }}
            key={i}
            className={classes["news-item"]}
          >
            <p className={classes["news-article-title"]}>
              Inter Milan 3-0 Spazia
            </p>
            <Image
              className={classes["news-article-image"]}
              src="/article-photo.png"
              alt="article-photo"
              width="260"
              height="170"
            />
            <p className={classes["news-article-para"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum..
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            {i==5&& <button className={classes["view-more"]}>VIEW MORE</button>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
