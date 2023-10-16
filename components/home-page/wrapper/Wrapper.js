"use client";
import { getProviders } from "next-auth/react";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { getData } from "../../../utils/dashboardTablePagesFunctions";
import HomeSearch from "../../homeSearch/HomeSearch";
import ShowMore from "../../showMore/ShowMore";
import Match from "../match/Match";
import Sports from "../sports/Sports";
import classes from "./wrapper.module.css";

const Wrapper = ({ data }) => {
  const hotMatchesRef = useRef();
  const otherMatchesRef = useRef();

  const [hotMatches, setHotMatches] = useState(data?.hotMatches);
  const [otherMatches, setOtherMatches] = useState({
    total: data?.results,
    matches: data?.data?.data,
  });
  const [seacrhValue, setSearchValue] = useState("");

  const [paginationNum, setPaginationNum] = useState(1);
  const handleSearch = (val) => {
    setSearchValue(val);
  };

  const fetchNewData = useCallback(async (query, cause) => {
    try {
      const response = await getData("sports", query);
      setHotMatches(response?.hotMatches);
      console.log("query", response?.data?.data);
      const providers = await getProviders();
      console.log("Providers", providers);

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
        sportCategory: "football",
        searchValue: seacrhValue,
        sort: { eventDate: 1 },
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
  }, [seacrhValue, fetchNewData]);
  const showMoreHandeler = async () => {
    const num = paginationNum;
    setPaginationNum(paginationNum + 1);

    await fetchNewData(
      {
        limit: 10,
        skip: 20 + (num - 1) * 10,
        sportCategory: "football",
        searchValue: seacrhValue,
        sort: { eventDate: 1 },
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
        <Sports sportCategory={"Football"} />
      </div>
      <div className={classes["matches-container"]}>
        <section className={classes["hot-matches"]}>
          <div className={classes["hot-mathes-top"]}>
            <h2 className={classes["title"]}>HOT MATCHES</h2>
            <Image
              src="/svg/home/hot-matches-icon.svg"
              alt="live"
              width="31"
              height="44"
            />
          </div>
          <div className={classes["matches"]}>
            {hotMatches?.map((matchData, index) => (
              <Match
                type={"hot-matches"}
                matchData={matchData}
                key={matchData?._id}
                index={index}
                length={hotMatches.length}
              />
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
            {otherMatches?.matches?.map((matchData, index) => (
              <Match
                matchData={matchData}
                key={matchData?._id}
                index={index}
                length={otherMatches?.matches?.length}
              />
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
  );
};

export default Wrapper;
