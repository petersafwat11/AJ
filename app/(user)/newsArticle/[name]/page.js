"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Marque from "../../../../components/marque/Marque";
import ArticleContent from "../../../../components/news/articleContent/ArticleContent";
import Comments from "../../../../components/news/comments/Comments";
import SocialShare from "../../../../components/news/socialShare/SocialShare";
import PageTitle from "../../../../components/pageTitle/PageTitle";
import Popup from "../../../../components/popupWrapper/Popup";
import ProtonVpn from "../../../../components/protonVpn/ProtonVpn";
import ShareLinks from "../../../../components/shareLinks/ShareLinks";
import TopLayout from "../../../../components/topLayout/TopLayout";
import { getData } from "../../../../utils/dashboardTablePagesFunctions";
import classes from "./news-article.module.css";
const Page = () => {
  const pathname = usePathname();
  const shareUrl = `${process.env.FRONTEND_SERVER}${pathname}`;
  const quote = "Check out this awesome content!";
  const [subNews, setSubNews] = useState([]);
  const [title, setTitle] = useState("");
  const [showShareLinks, setShowShareLinks] = useState(false);

  const toggleShareLinks = () => {
    setShowShareLinks(!showShareLinks);
  };

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
        {showShareLinks && (
          <Popup>
            <ShareLinks
              shareUrl={shareUrl}
              quote={quote}
              toggleShareLinks={toggleShareLinks}
            />
          </Popup>
        )}

        <div className={classes["news-article"]}>
          <PageTitle title={"NEWS"} />
          <ArticleContent title={title} subNews={subNews} />
          <span className={classes["seperator"]}></span>
          <SocialShare
            toggleShareLinks={toggleShareLinks}
            shareUrl={shareUrl}
            quote={quote}
          />
          <ProtonVpn />
          <Comments />
        </div>
      </div>
    </div>
  );
};

export default Page;
