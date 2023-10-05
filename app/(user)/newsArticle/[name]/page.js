"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Marque from "../../../../components/marque/Marque";
import ArticleContent from "../../../../components/news/articleContent/ArticleContent";
import TopLayout from "../../../../components/topLayout/TopLayout";
import { getData } from "../../../../utils/dashboardTablePagesFunctions";
import classes from "./news-article.module.css";
import PageTitle from "../../../../components/pageTitle/PageTitle";
const Page = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [subNews, setSubNews] = useState([]);
  const [title, setTitle] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
    const newsURL = pathname.slice(pathname.lastIndexOf("/") + 1);
    const newsTitle = newsURL.replace(/%20|-/g, " ");
    const pageData = async () => {
      try {
        const newsItem = await getData("news/title", {
          title: newsTitle,
        });
        setTitle(newsItem?.data?.data?.title);
        setSubNews(newsItem?.data?.data?.subNews);
        console.log("newsItem", newsItem);
      } catch (error) {
        console.log(error);
      }
    };
    pageData();
  }, [pathname]);
  return (
    <div className="wrapper">
      <TopLayout />
      <div className="wrapper-2">
        <Marque />

        <div className={classes["news-article"]}>
          <PageTitle title={"NEWS"} />

          <ArticleContent title={title} subNews={subNews} />
        </div>
        {/* <div className="center-under-dev">
          <UnderDevelopment />
        </div> */}
      </div>
    </div>
  );
};

export default Page;
