import Image from "next/image";
import React, { useState } from "react";
import MatchDots from "../matchDots/MatchDots";
import PlayersLocations3241 from "./plans/firstTeam/3-2-4-1/PlayersLocations3241";
import PlayersLocations343 from "./plans/firstTeam/3-4-3/PlayersLocations343";
import PlayersLocations41212 from "./plans/firstTeam/4-1-2-1-2/PlayersLocations41212";
import PlayersLocations4231 from "./plans/firstTeam/4-2-3-1/PlayersLocations4231";
import PlayersLocations433 from "./plans/firstTeam/4-3-3/PlayersLocations433";
import PlayersLocations442 from "./plans/firstTeam/4-4-2/PlayersLocations442";
import PlayersLocations451 from "./plans/firstTeam/4-5-1/PlayersLocations451";
import PlayersLocations5212 from "./plans/firstTeam/5-2-1-2/PlayersLocations5212";
import PlayersLocations523 from "./plans/firstTeam/5-2-3/PlayersLocations451";
import PlayersLocations532 from "./plans/firstTeam/5-3-2/PlayersLocations451";
import PlayersLocations541 from "./plans/firstTeam/5-4-1/PlayersLocations5212";
import { default as PlayersLocations3241Second } from "./plans/secondTeam/3-2-4-1/PlayersLocations3241";
import { default as PlayersLocations343Second } from "./plans/secondTeam/3-4-3/PlayersLocations343";
import { default as PlayersLocations41212Second } from "./plans/secondTeam/4-1-2-1-2/PlayersLocations41212";
import { default as PlayersLocations4231Second } from "./plans/secondTeam/4-2-3-1/PlayersLocations4231";
import { default as PlayersLocations433Second } from "./plans/secondTeam/4-3-3/PlayersLocations433";
import { default as PlayersLocations442Second } from "./plans/secondTeam/4-4-2/PlayersLocations442";
import { default as PlayersLocations451Second } from "./plans/secondTeam/4-5-1/PlayersLocations451";
import { default as PlayersLocations5212Second } from "./plans/secondTeam/5-2-1-2/PlayersLocations5212";
import { default as PlayersLocations523Second } from "./plans/secondTeam/5-2-3/PlayersLocations451";
import { default as PlayersLocations532Second } from "./plans/secondTeam/5-3-2/PlayersLocations451";
import { default as PlayersLocations541Second } from "./plans/secondTeam/5-4-1/PlayersLocations5212";

import classes from "./staduim.module.css";

const Staduim = ({ data }) => {
  const firstTeamPlan = data[0]?.formation;
  const secondTeamPlan = data[1]?.formation;
  const [alternativePlayers, setAlternativePlayers] = useState({
    firstTeam: 1,
    secondTeam: 1,
  });
  const changeFirstTeamOptions = (option) => {
    setAlternativePlayers({
      firstTeam: option,
      secondTeam: alternativePlayers.secondTeam,
    });
  };
  const changeSecondTeamOptions = (option) => {
    setAlternativePlayers({
      firstTeam: alternativePlayers.firstTeam,
      secondTeam: option,
    });
  };
  return (
    <div className={classes["container"]}>
      <div className={classes["right"]}>
        <MatchDots
          vertical={true}
          options={[1, 2]}
          selectedOption={alternativePlayers.firstTeam}
          changeOptions={changeFirstTeamOptions}
        />
        <div className={classes["alternative-players"]}>
          {alternativePlayers.firstTeam === 1
            ? data[0]?.substitutes?.slice(0, 6)?.map((player, index) => (
                <div key={index} className={classes["alternative-player"]}>
                  <Image
                    src="/svg/watch/handball/red-player.svg"
                    alt="helmet"
                    width="26"
                    height="33"
                  />

                  <p className={classes["alternative-player-name"]}>
                    {player.player.name}
                  </p>
                </div>
              ))
            : data[0]?.substitutes?.slice(6)?.map((player, index) => (
                <div key={index} className={classes["alternative-player"]}>
                  <Image
                    src="/svg/watch/handball/red-player.svg"
                    alt="helmet"
                    width="26"
                    height="33"
                  />

                  <p className={classes["alternative-player-name"]}>
                    {player.player.name}
                  </p>
                </div>
              ))}
        </div>
      </div>
      <div className={classes["stadium-wrapper"]}>
        <div className={classes["stadium"]}>
          {firstTeamPlan === "3-2-4-1" ? (
            <PlayersLocations3241 />
          ) : firstTeamPlan === "3-4-3" ? (
            <PlayersLocations343 />
          ) : firstTeamPlan === "4-1-2-1-2" ? (
            <PlayersLocations41212 />
          ) : firstTeamPlan === "4-3-3" ? (
            <PlayersLocations433 />
          ) : firstTeamPlan === "4-4-2" ? (
            <PlayersLocations442 />
          ) : firstTeamPlan === "4-5-1" ? (
            <PlayersLocations451 />
          ) : firstTeamPlan === "5-2-1-2" ? (
            <PlayersLocations5212 />
          ) : firstTeamPlan === "5-2-3" ? (
            <PlayersLocations523 />
          ) : firstTeamPlan === "5-3-2" ? (
            <PlayersLocations532 />
          ) : firstTeamPlan === "5-4-1" ? (
            <PlayersLocations541 />
          ) : firstTeamPlan === "4-2-3-1" ? (
            <PlayersLocations4231 />
          ) : (
            ""
          )}
          {secondTeamPlan === "3-2-4-1" ? (
            <PlayersLocations3241Second />
          ) : firstTeamPlan === "3-4-3" ? (
            <PlayersLocations343Second />
          ) : firstTeamPlan === "4-1-2-1-2" ? (
            <PlayersLocations41212Second />
          ) : firstTeamPlan === "4-3-3" ? (
            <PlayersLocations433Second />
          ) : firstTeamPlan === "4-4-2" ? (
            <PlayersLocations442Second />
          ) : firstTeamPlan === "4-5-1" ? (
            <PlayersLocations451Second />
          ) : firstTeamPlan === "5-2-1-2" ? (
            <PlayersLocations5212Second />
          ) : firstTeamPlan === "5-2-3" ? (
            <PlayersLocations523Second />
          ) : firstTeamPlan === "5-3-2" ? (
            <PlayersLocations532Second />
          ) : firstTeamPlan === "5-4-1" ? (
            <PlayersLocations541Second />
          ) : firstTeamPlan === "4-2-3-1" ? (
            <PlayersLocations4231Second />
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={classes["left"]}>
        <div className={classes["alternative-players"]}>
          {alternativePlayers.secondTeam === 1
            ? data[1]?.substitutes?.slice(0, 6)?.map((player, index) => (
                <div key={index} className={classes["alternative-player"]}>
                  <Image
                    src="/svg/watch/handball/yellow-player.svg"
                    alt="helmet"
                    width="26"
                    height="33"
                  />

                  <p className={classes["alternative-player-name"]}>
                    {" "}
                    {player.player.name}
                  </p>
                </div>
              ))
            : data[1]?.substitutes?.slice(6)?.map((player, index) => (
                <div key={index} className={classes["alternative-player"]}>
                  <Image
                    src="/svg/watch/handball/yellow-player.svg"
                    alt="helmet"
                    width="26"
                    height="33"
                  />

                  <p className={classes["alternative-player-name"]}>
                    {" "}
                    {player.player.name}
                  </p>
                </div>
              ))}
        </div>
        <MatchDots
          vertical={true}
          options={[1, 2]}
          selectedOption={alternativePlayers.secondTeam}
          changeOptions={changeSecondTeamOptions}
        />
      </div>
    </div>
  );
};

export default Staduim;
