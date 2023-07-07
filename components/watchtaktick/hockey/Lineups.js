import Image from "next/image";
import React, { useState } from "react";
import MatchDots from "../matchDots/MatchDots";
import AlternativePlayers from "./AlternativePlayers";
import Staduim from "./Staduim";
import classes from "./lineups.module.css";
const Lineups = () => {
  const [alternativePlayers, setAlternativePlayers] = useState({
    firstTeam: "first",
    secondTeam: "first",
  });
  const [option, setOption] = useState(1);
  const changeCategory = (option) => {
    setOption(option);
  };

  return (
    <div className={classes["container"]}>
      <div className={classes["right"]}>
        <div className={classes["alternative-team-1-dots"]}>
          <div
            onClick={() => {
              setAlternativePlayers({
                firstTeam: "first",
                secondTeam: alternativePlayers.secondTeam,
              });
            }}
            className={
              classes[
                alternativePlayers.firstTeam === "first"
                  ? "dot-selected"
                  : "dot"
              ]
            }
          >
            <div
              className={
                classes[
                  alternativePlayers.firstTeam === "first"
                    ? "meduim-dot-selected"
                    : "meduim-dot"
                ]
              }
            >
              <span
                className={
                  classes[
                    alternativePlayers.firstTeam === "first"
                      ? "small-dot-selected"
                      : "small-dot"
                  ]
                }
              ></span>
            </div>
          </div>
          <div
            onClick={() => {
              setAlternativePlayers({
                firstTeam: "second",
                secondTeam: alternativePlayers.secondTeam,
              });
            }}
            className={
              classes[
                alternativePlayers.firstTeam === "second"
                  ? "dot-selected"
                  : "dot"
              ]
            }
          >
            <div
              className={
                classes[
                  alternativePlayers.firstTeam === "second"
                    ? "meduim-dot-selected"
                    : "meduim-dot"
                ]
              }
            >
              <span
                className={
                  classes[
                    alternativePlayers.firstTeam === "second"
                      ? "small-dot-selected"
                      : "small-dot"
                  ]
                }
              ></span>
            </div>
          </div>
        </div>
        <div className={classes["alternative-team-1"]}>
          {[1, 2, 3, 4, 5].map((plater, index) => (
            <div key={index} className={classes["alternative-player"]}>
              <Image
                src="/svg/watch/hockey/pink-helmet.svg"
                alt="helmet"
                width="37"
                height="35"
              />
              <p className={classes["alternative-player-name"]}>K. Alexander</p>
            </div>
          ))}
        </div>
      </div>
      <Staduim />
      <div className={classes["left"]}>
        <div className={classes["alternative-team-2"]}>
          {[1, 2, 3, 4, 5].map((plater, index) => (
            <div key={index} className={classes["alternative-player"]}>
              <Image
                src="/svg/watch/hockey/blue-helmet.svg"
                alt="helmet"
                width="37"
                height="35"
              />
              <p className={classes["alternative-player-name"]}>K. Alexander</p>
            </div>
          ))}
        </div>
        <div className={classes["alternative-team-2-dots"]}>
          <div
            onClick={() => {
              setAlternativePlayers({
                secondTeam: "first",
                firstTeam: alternativePlayers.firstTeam,
              });
            }}
            className={
              classes[
                alternativePlayers.secondTeam === "first"
                  ? "dot-selected"
                  : "dot"
              ]
            }
          >
            <div
              className={
                classes[
                  alternativePlayers.secondTeam === "first"
                    ? "meduim-dot-selected"
                    : "meduim-dot"
                ]
              }
            >
              <span
                className={
                  classes[
                    alternativePlayers.secondTeam === "first"
                      ? "small-dot-selected"
                      : "small-dot"
                  ]
                }
              ></span>
            </div>
          </div>
          <div
            onClick={() => {
              setAlternativePlayers({
                secondTeam: "second",
                firstTeam: alternativePlayers.firstTeam,
              });
            }}
            className={
              classes[
                alternativePlayers.secondTeam === "second"
                  ? "dot-selected"
                  : "dot"
              ]
            }
          >
            <div
              className={
                classes[
                  alternativePlayers.secondTeam === "second"
                    ? "meduim-dot-selected"
                    : "meduim-dot"
                ]
              }
            >
              <span
                className={
                  classes[
                    alternativePlayers.secondTeam === "second"
                      ? "small-dot-selected"
                      : "small-dot"
                  ]
                }
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes["alternative-players"]}>
        <AlternativePlayers />
      </div>
      <MatchDots
        options={[1, 2]}
        selectedOption={option}
        changeOptions={changeCategory}
      />
    </div>
  );
};

export default Lineups;
