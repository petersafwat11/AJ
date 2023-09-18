"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Provider } from "react-redux";
import store from "../../../store/store";
import { getData } from "../../../utils/dashboardTablePagesFunctions";
import Filter from "../../home-page/filter/Filter";
import HomeSearch from "../../homeSearch/HomeSearch";
import Match from "../../match/Match";
import ShowMore from "../../showMore/ShowMore";
import { categories } from "../categoriesOptions";
import Sports from "../sports/Sports";
import classes from "./wrapper.module.css";

const Wrapper = ({ data }) => {
  const hotMatchesRef = useRef();
  const otherMatchesRef = useRef();

  const [hotMatches, setHotMatches] = useState(
    data?.data?.data?.filter((item) => item.flagged === true)
  );
  const [otherMatches, setOtherMAtches] = useState({
    total: data?.data?.totalMatches,
    matches: data?.data?.data,
  });
  const [seacrhValue, setSearchValue] = useState("");

  const [sportCategory, setSportCategory] = useState("Football");
  const changeSportCategory = (cat) => {
    setSportCategory(cat);
  };
  const [paginationNum, setPaginationNum] = useState(1);
  const handleSearch = (val) => {
    setSearchValue(val);
  };

  const fetchNewData = useCallback(async (query, cause) => {
    try {
      const response = await getData("sports", query);

      if (cause !== "showMore") {
        setHotMatches(
          response?.data?.data?.filter((item) => item.flagged === true)
        );
        setOtherMAtches({
          total: response?.data?.totalMatches,
          matches: response?.data?.data,
        });
      } else {
        setHotMatches([
          ...hotMatchesRef.current,
          // eslint-disable-next-line no-unsafe-optional-chaining
          ...response?.data?.data?.filter((item) => item.flagged === true),
        ]);
        setOtherMAtches({
          total: otherMatchesRef.current.total,
          matches: [
            otherMatchesRef.current.matches,
            // eslint-disable-next-line no-unsafe-optional-chaining
            ...response?.data?.totalMatches,
          ],
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
        limit: undefined,
        sportCategory: "football",
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
    console.log("show-more");
    // const num = paginationNum;
    // await fetchNewData(
    //   {
    //     limit: 4,
    //     skip: 8 + (num - 1) * 4,
    //     sportCategory: "football",
    //     searchValue: seacrhValue,
    //     or: [
    //       "teamsTitle",
    //       "firstTeamName",
    //       "secondTeamName",
    //       "eventLeague",
    //       "eventStadium",
    //     ],
    //   },
    //   "showMore"
    // );
    // setPaginationNum(paginationNum + 1);
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
        <Sports sportCategory={sportCategory} />
      </div>
      <div className={classes["matches-container"]}>
        <section className={classes["hot-matches"]}>
          <h2 className={classes["title"]}>HOT MATCHES</h2>
          <div className={classes["time-zone"]}>
            <Filter
              options={categories}
              filterValue={sportCategory}
              handleFilter={changeSportCategory}
            />
          </div>
          <div className={classes["matches"]}>
            <Provider store={store}>
              {hotMatches?.map((matchData) => (
                <Match matchData={matchData} key={matchData?._id} />
              ))}
            </Provider>
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
            <Provider store={store}>
              {otherMatches?.matches?.map((matchData) => (
                <Match matchData={matchData} key={matchData?._id} />
              ))}
            </Provider>
          </div>
        </section>
      </div>
      <div className={classes["show-more-button"]}>
        <ShowMore showMoreHandeler={showMoreHandeler} />
      </div>
    </div>
  );
};

export default Wrapper;
