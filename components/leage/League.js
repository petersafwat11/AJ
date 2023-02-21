import classes from "./League.module.css";

import Image from "next/image";
const LeagueMenu = () => {
  return (
    <div className={classes["leagueMenu"]}>
      <div className={classes["leagueMenu-container"]}>
        <div className={classes["leagueMenu-container-img"]}>
          <Image src="/league-Menu/one.png" alt="one" width="60" height="60" />
        </div>
        <div className={classes["leagueMenu-container-img"]}>
          <Image src="/league-Menu/two.png" alt="two" width="60" height="60" />
        </div>
        <div className={classes["leagueMenu-container-img"]}>
          <Image
            src="/league-Menu/three.png"
            alt="three"
            width="60"
            height="60"
          />
        </div>
        <div className={classes["leagueMenu-container-img"]}>
          <Image
            src="/league-Menu/four.png"
            alt="four"
            width="60"
            height="60"
          />
        </div>
        <div className={classes["leagueMenu-container-img"]}>
          <Image
            src="/league-Menu/five.png"
            alt="five"
            width="60"
            height="60"
          />
        </div>
        <div className={classes["leagueMenu-container-img"]}>
          <Image src="/league-Menu/six.png" alt="six" width="60" height="60" />
        </div>
        <div className={classes["leagueMenu-container-img"]}>
          <Image
            src="/league-Menu/seven.png"
            alt="seven"
            width="60"
            height="60"
          />
        </div>
        <div className={classes["leagueMenu-container-img"]}>
          <Image
            src="/league-Menu/eight.png"
            alt="eight"
            width="60"
            height="60"
          />
        </div>
      </div>
    </div>
  );
};

export default LeagueMenu;
