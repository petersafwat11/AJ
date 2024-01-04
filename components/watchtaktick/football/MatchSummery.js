import React, { useEffect, useState } from "react";
import { getData } from "../../../utils/dashboardTablePagesFunctions";
import { sportCategoriesTypes } from "../../../utils/sportCategoryApiDataTypes";
import GlobalHeader from "../globalHeader/GlobalHeader";
import Statistics from "../statistics/Statistics";
import Events from "./events/Events";
import Lineups from "./Lineups";
import classes from "./matchSummery.module.css";
const MatchSummery = ({
  sportCategory,
  matchId,
  eventDate,
  secondTeamName,
  firstTeamName,
  eventStadium,
}) => {
  const [category, setCategory] = useState("LINEUPS");
  const [lineupsData, setLineupsData] = useState([]);
  const [eventsData, setEventsData] = useState([]);
  const [statsData, setStatsData] = useState([
    {
      home: 0,
      name: "Total Shots",
      away: 0,
    },
    {
      home: 0,
      name: "Shots on Goal",
      away: 0,
    },
    {
      home: 0,
      name: "Shots off Goal",
      away: 0,
    },
    {
      home: 0,
      name: "Blocked Shots",
      away: 0,
    },
    {
      home: 0,
      name: "Total passes",
      away: 0,
    },
    {
      home: 0,
      name: "Passes accurate",
      away: 0,
    },
    {
      home: 0,
      name: "Corner Kicks",
      away: 0,
    },
    {
      home: 0,
      name: "Offsides",
      away: 0,
    },
    {
      home: 0,
      name: "Fouls",
      away: 0,
    },
    {
      home: 0,
      name: "Yellow Cards",
      away: 0,
    },
    {
      home: 0,
      name: "Red Cards",
      away: 0,
    },
  ]);
  const changeCategory = (category) => {
    setCategory(category);
  };
  useEffect(() => {
    if (sportCategory && matchId) {
      console.log(
        sportCategoriesTypes.find((item) => item.sport === sportCategory)
          .dataTypes
      );
      (async () => {
        try {
          const statistics = await getData(`sports/eventAPIData/statistics`, {
            matchId,
            sportCategory,
            eventDate,
            dataType: "Statistics",
          });
          const events = await getData(`sports/eventAPIData/event`, {
            matchId,
            sportCategory,
            eventDate,
            dataType: "Events",
          });

          const lineups = await getData(`sports/eventAPIData/lineups`, {
            matchId,
            sportCategory,
            eventDate,
            dataType: "Lineups",
          });
          const useableData = [
            "Total Shots",
            "Shots on Goal",
            "Shots off Goal",
            "Blocked Shots",
            "Total passes",
            "Passes accurate",
            "Corner Kicks",
            "Offsides",
            "Fouls",
            "Yellow Cards",
            "Red Cards",
          ].map((item) => {
            return {
              home: statistics.data[0].statistics.find(
                (apiItem) => apiItem.type == item
              ).value,
              name:
                item === "Corner Kicks"
                  ? "Corners"
                  : item === "Shots on Goal"
                  ? "Shots on Target"
                  : item === "Shots off Goal"
                  ? "Shots off Target"
                  : item === "Passes accurate"
                  ? "Accurate Passes"
                  : item,

              away: statistics.data[1].statistics.find(
                (apiItem) => apiItem.type == item
              ).value,
            };
          });
          console.log("lineups", lineups.data);
          console.log("events", events);
          setStatsData(useableData);
          setLineupsData(lineups.data);
          setEventsData(events.data);
        } catch (err) {
          console.log("error", err);
        }
      })();
    }
  }, [matchId, sportCategory, eventDate]);

  return (
    <div className={classes["container"]}>
      <GlobalHeader
        category={category}
        changeCategory={changeCategory}
        categories={["LINEUPS", "STATS", "EVENTS"]}
      />
      {category === "LINEUPS" ? (
        <Lineups
          data={lineupsData}
          firstTeamName={firstTeamName}
          secondTeamName={secondTeamName}
        />
      ) : category === "EVENTS" ? (
        <Events
          eventStadium={eventStadium}
          data={eventsData}
          firstTeamName={firstTeamName}
          secondTeamName={secondTeamName}
        />
      ) : (
        <Statistics
          firstTeamName={firstTeamName}
          secondTeamName={secondTeamName}
          data={statsData}
          optionsOne={[
            "Total shots",
            "Shots on target",
            "Shots off target",
            "Blocked Shots",
            "Total passes",
            "Accurate Passes",
            "Corners",
            "Offsides",
            "Fouls",
            "Yellow cards",
            "Red cards",
          ]}
        />
      )}
    </div>
  );
};

export default MatchSummery;
