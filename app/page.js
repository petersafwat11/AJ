import Image from "next/image";
import Footer from "../components/footer/Footer";
import NewsLetter from "../components/news-letter/NewsLetter";

import React from "react";
import HomeSearch from "../components/homeSearch/HomeSearch";
import Marque from "../components/marque/Marque";
import Match from "../components/match/Match";
import ShowMore from "../components/showMore/ShowMore";
import Sports from "../components/sports/Sports";
import TimezoneDropdown from "../components/timezomeDropdowm/TimezoneDropdown";
import TopLayout from "../components/topLayout/TopLayout";
import { getData } from "../utils/dashboardTablePagesFunctions";
import classes from "./page.module.css";
const Page = async () => {
  const currentEvents = await getData("sports/currentEvents");
  const hotMatches = currentEvents?.data.filter((item) => item.flagged === true);

  const otherMatches = {
    total: currentEvents?.totalOtherMatches,
    matches: currentEvents?.data.filter((item) => item.flagged === false),
  };

  return (
    <div className="wrapper">
      <TopLayout />
      <div className="wrapper-2">
        <Marque />
        <div className={classes["container"]}>
          <div className={classes["search-mobile"]}>
            <input
              className={classes["search-mobile-input"]}
              type="text"
              placeholder="Enter keyword..."
            />
            <button className={classes["search-mobile-button"]}>SEARCH</button>
          </div>
          <div className={classes["top-screen"]}>
            <div className={classes["top-screen-live-icon"]}>
              <Image src="/svg/live.svg" alt="live" width="31" height="34" />
            </div>
            <Sports />
          </div>
          <div className={classes["matches-container"]}>
            <section className={classes["hot-matches"]}>
              <h2 className={classes["title"]}>HOT MATCHES</h2>
              <div className={classes["time-zone"]}>
                <TimezoneDropdown />
              </div>
              <div className={classes["matches"]}>
                {hotMatches?.map((matchData) => (
                  <Match matchData={matchData} key={matchData?._id} />
                ))}
              </div>
            </section>
            <section className={classes["other-matches"]}>
              <div className={classes["other-matches-title-and-search"]}>
                <h2 className={classes["title"]}>OTHER MATCHES</h2>
                <div className={classes["search-desktop"]}>
                  <HomeSearch />
                </div>
              </div>
              <div className={classes["time-zone"]}>
                <TimezoneDropdown />
              </div>
              <div className={classes["matches"]}>
                {otherMatches?.matches.map((matchData) => (
                  <Match matchData={matchData} key={matchData?._id} />
                ))}
              </div>
            </section>
          </div>
          {/* {otherMatches.total > 3 && (
            <div className={classes["show-more-button"]}>
              <ShowMore />
            </div>
          )} */}
        </div>
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
