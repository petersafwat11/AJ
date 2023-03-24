import classes from "./league.module.css";

import Image from "next/image";
const LeagueMenu = () => {
  return (
    <div className={classes["leagueMenu"]}>
      <div className={classes["leagueMenu-container"]}>
        <div className={classes["leagueMenu-container-img"]}>
          <Image
            src="/svg/statistics/eight.svg"
            alt="one"
            width="70"
            height="70"
          />
        </div>
        <div className={classes["leagueMenu-container-img"]}>
          <Image
            src="/svg/statistics/seven.svg"
            alt="seven"
            width="70"
            height="70"
          />
        </div>
        <div className={classes["leagueMenu-container-img"]}>
          <Image
            src="/svg/statistics/six.svg"
            alt="six"
            width="70"
            height="70"
          />
        </div>
        <div className={classes["leagueMenu-container-img"]}>
          <Image
            src="/svg/statistics/five.svg"
            alt="five"
            width="70"
            height="70"
          />
        </div>
        <div className={classes["leagueMenu-container-img"]}>
          <Image
            src="/svg/statistics/four.svg"
            alt="four"
            width="70"
            height="70"
          />
        </div>
        <div className={classes["leagueMenu-container-img"]}>
          <Image
            src="/svg/statistics/three.svg"
            alt="three"
            width="70"
            height="70"
          />
        </div>
        <div className={classes["leagueMenu-container-img"]}>
          <Image
            src="/svg/statistics/two.svg"
            alt="two"
            width="70"
            height="70"
          />
        </div>
        <div className={classes["leagueMenu-container-img"]}>
          <Image
            src="/svg/statistics/one.svg"
            alt="one"
            width="70"
            height="70"
          />
        </div>
      </div>
    </div>
  );
};

export default LeagueMenu;
