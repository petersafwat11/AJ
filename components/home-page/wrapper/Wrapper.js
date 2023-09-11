"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { getData } from "../../../utils/dashboardTablePagesFunctions";
import Filter from "../../home-page/filter/Filter";
import HomeSearch from "../../homeSearch/HomeSearch";
import Match from "../../match/Match";
import Sports from "../sports/Sports";
import classes from "./wrapper.module.css";
const Wrapper = ({ data }) => {
  // const hotMatches =

  // const otherMatches = ;
  console.log("data", data);
  const [hotMatches, setHotMatches] = useState(
    data?.data?.filter((item) => item.flagged === true)
  );
  const [otherMatches, setOtherMAtches] = useState({
    total: data?.totalMatches,
    matches: data?.data,
  });
  const [sportCategory, setSportCategory] = useState("Football");
  const changeSportCategory = (cat) => {
    setSportCategory(cat);
  };
  const fetchNewData = useCallback(async () => {
    try {
      const response = await getData("sports/currentEvents", {
        page: 1,
        limit: undefined,
        sportCategory: sportCategory,
      });
      setHotMatches(response?.data?.filter((item) => item.flagged === true));
      setOtherMAtches({
        total: response?.totalMatches,
        matches: response?.data,
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }, [sportCategory]);
  useEffect(() => {
    fetchNewData();
  }, [sportCategory, fetchNewData]);
  return (
    <div className={classes["container"]}>
      <div className={classes["search-mobile"]}>
        <input
          className={classes["search-mobile-input"]}
          type="text"
          placeholder="Enter keyword..."
        />
        <button className={classes["search-mobile-button"]}>SEARCH</button>
      </div>
      <div className="center-under-dev">
        <Filter
          sportCategory={sportCategory}
          changeSportCategory={changeSportCategory}
        />
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
          {/* <div className={classes["time-zone"]}>
            <TimezoneDropdown />
          </div> */}
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
          {/* <div className={classes["time-zone"]}>
            <TimezoneDropdown />
          </div> */}
          <div className={classes["matches"]}>
            {otherMatches?.matches?.map((matchData) => (
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
  );
};

export default Wrapper;
