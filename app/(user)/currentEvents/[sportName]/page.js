"use client";
import Image from "next/image";

import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { categories } from "../../../../components/home-page/categoriesOptions";
import Filter from "../../../../components/home-page/filter/Filter";
import Sports from "../../../../components/home-page/sports/Sports";
import HomeSearch from "../../../../components/homeSearch/HomeSearch";
import Marque from "../../../../components/marque/Marque";
import Match from "../../../../components/match/Match";
import ShowMore from "../../../../components/showMore/ShowMore";
import TopLayout from "../../../../components/topLayout/TopLayout";
import { getData } from "../../../../utils/dashboardTablePagesFunctions";
import classes from "./page.module.css";

const Page = () => {
  const pathname = usePathname();
  const [hotMatches, setHotMAtches] = useState([]);
  const [otherMatches, setOtherMatches] = useState({});
  const [error, setError] = useState(false);
  const [sportCategory, setSportCategory] = useState("");
  const hotMatchesRef = useRef();
  const otherMatchesRef = useRef();
  const [seacrhValue, setSearchValue] = useState("");
  const [paginationNum, setPaginationNum] = useState(1);
  const changeSportCategory = (cat) => {
    setSportCategory(cat);
  };
  useEffect(() => {
    const category = pathname.slice(pathname.lastIndexOf("/") + 1);
    const pageData = async () => {
      try {
        const currentEvents = await getData("sports", {
          otherCategory: category === "others" ? true : false,
          sportCategory: category === "others" ? undefined : category,
          page: 1,
          limit: 20,
        });
        setSportCategory(category);
        console.log("currentEvents", currentEvents);
        setHotMAtches(
          currentEvents?.data?.data?.filter((item) => item.flagged === true)
        );
        setOtherMatches({
          total: currentEvents?.results,
          matches: currentEvents?.data?.data,
        });
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    pageData();
  }, [setError, setHotMAtches, setOtherMatches, pathname]);
  const handleSearch = (val) => {
    setSearchValue(val);
  };

  const fetchNewData = useCallback(async (query, cause) => {
    try {
      const response = await getData("sports", query);

      if (cause !== "showMore") {
        setOtherMatches({
          total: response?.results,
          matches: response?.data?.data,
        });
        setPaginationNum(1);
      } else {
        let other = [];
        other = response?.data?.data;
        setOtherMatches({
          total: response?.results,
          matches: [...otherMatchesRef.current.matches, ...other],
        });
      }
    } catch (err) {
      console.log(err);
    }
  }, []);
  useEffect(() => {
    fetchNewData(
      {
        page: 1,
        limit: 20,
        otherCategory: sportCategory === "others" ? true : false,
        sportCategory: sportCategory === "others" ? undefined : sportCategory,
        searchValue: seacrhValue,
        or: [
          "teamsTitle",
          "firstTeamName",
          "secondTeamName",
          "eventLeague",
          "eventStadium",
        ],
      },
      "search"
    );
  }, [seacrhValue, fetchNewData, sportCategory]);
  const showMoreHandeler = async () => {
    const num = paginationNum;
    setPaginationNum(paginationNum + 1);
    await fetchNewData(
      {
        limit: 10,
        skip: 20 + (num - 1) * 10,
        otherCategory: sportCategory === "others" ? true : false,
        sportCategory: sportCategory === "others" ? undefined : sportCategory,
        searchValue: seacrhValue,
        or: [
          "teamsTitle",
          "firstTeamName",
          "secondTeamName",
          "eventLeague",
          "eventStadium",
        ],
      },
      "showMore"
    );
  };
  useEffect(() => {
    hotMatchesRef.current = hotMatches;
    otherMatchesRef.current = otherMatches;
  }, [hotMatches, otherMatches]);

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
              {pathname !== "/currentEvents/football" &&
                pathname !== "/currentEvents/basketball" &&
                pathname !== "/currentEvents/nfl" &&
                pathname !== "/currentEvents/boxing" &&
                pathname !== "/" && (
                  <div className={classes["time-zone"]}>
                    <Filter
                      options={[...categories]}
                      filterValue={
                        sportCategory === "others" ||
                        sportCategory === "all%20others"
                          ? "ALL OTHERS"
                          : sportCategory
                      }
                      handleFilter={changeSportCategory}
                    />
                  </div>
                )}
              <div className={classes["matches"]}>
                {hotMatches?.map((matchData) => (
                  <Match matchData={matchData} key={matchData._id} />
                ))}
              </div>
            </section>
            <section className={classes["other-matches"]}>
              <div className={classes["other-matches-title-and-search"]}>
                <h2 className={classes["title"]}>OTHER MATCHES</h2>
                <div className={classes["search-desktop"]}>
                  <HomeSearch
                    seacrhValue={seacrhValue}
                    handleSearch={handleSearch}
                  />
                </div>
              </div>
              <div className={classes["matches"]}>
                {otherMatches?.matches?.map((matchData) => (
                  <Match matchData={matchData} key={matchData._id} />
                ))}
              </div>
            </section>
          </div>
          {otherMatches?.total > otherMatches?.matches?.length && (
            <div className={classes["show-more-button"]}>
              <ShowMore showMoreHandeler={showMoreHandeler} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
