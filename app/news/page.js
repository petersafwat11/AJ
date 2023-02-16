import React from "react";
import classes from './news.module.css';
import Image from "next/image";
const page = () => {
  return (
    <main className={classes["news"]}>
      <div className={classes["container"]}>
        <div className={classes["news-heading"]}>
          <h2 className={classes["heading"]}>NEWS</h2>
          <span></span>
        </div>
        <div className={classes["news-items"]}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <>
              <NewsItem
                src={"/svg/news-photo.png"}
                alt={"photo"}
                heading={"Sports News Title 1"}
                para={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                }
              />
            </>
          ))}
        </div>
        <div className={classes[""]}></div>
      </div>
    </main>
  );
};

export default page;
export const NewsItem=( {src, alt, heading, para})=>{
    return(
    <div className={classes["news-item"]}>
      <Image
        className={classes["news-item-image"]}
        src={src}
        alt={alt}
        width='108'
        height='85'
      />
      <div className={classes["news-item-content"]}>
        <h3 className={classes["news-item-heading"]}>{heading}</h3>
        <p className={classes["news-item-para"]}>{para}</p>
      </div>
    </div>
    )
}
