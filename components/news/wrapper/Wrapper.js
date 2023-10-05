"use client";
import { useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { getData } from "../../../utils/dashboardTablePagesFunctions";
import NewsItem from "../item/NewsItem";
import Paginations from "../paginations/Paginations";
import classes from "./wrapper.module.css";
const Wrapper = ({ data }) => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const newsData = !page || page === 1 ? data?.data?.data : [];
  const [news, setNews] = useState(newsData);
  const fetchNewData = useCallback(async (query) => {
    try {
      const response = await getData("news", query);
      setNews(response?.data?.data);
      console.log("new response", response);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    console.log("page", page);
    fetchNewData({
      page: page,
      limit: 10,
    });
  }, [fetchNewData, page]);

  return (
    <div className={classes["wrapper"]}>
      <div className={classes["container"]}>
        <div className={classes["news-items"]}>
          {news.length > 0 &&
            news.map((item, index) => (
              <NewsItem
                key={index}
                index={index}
                src={`${process.env.STATIC_SERVER}/img/news/${item?.coverImage}`}
                alt={"photo"}
                heading={item.title}
                para={item.description}
              />
            ))}
        </div>
      </div>
      <Paginations
        results={30}
        page={
          page && Number(page) <= data?.results
            ? Number(page)
            : Number(page) >= data?.results && page
            ? null
            : 1
        }
      />
    </div>
  );
};

export default Wrapper;
