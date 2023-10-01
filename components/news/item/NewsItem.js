import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import classes from "./newsItem.module.css";

const NewsItem = ({ src, alt, heading, para, index }) => {
  const router = useRouter();
  return (
    <div
      style={{ background: (index + 1) % 2 == 0 ? "#182228" : "inherit" }}
      onClick={() => {
        router.push(`/newsArticle/${heading.replace(/ /g, "-")}`);
      }}
      className={classes["news-item"]}
    >
      <Image
        crossOrigin="anonymous"
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

export default NewsItem;
