import React from "react";
import WatchDetails from "../../components/watch-details/WatchDetails";
import WhoWillWin from "../../components/whoWillWin/WhoWillWin";
import classes from "./watch.module.css";
const page = () => {
  return (
    <section className={classes["watch"]}>
      <div className={classes["container"]}>
        <WatchDetails
          lieageImage={"/svg/watch/primier-liage.svg"}
          firstTeamImage={"/svg/watch/man-united.png"}
          firstTeamName={"Man united"}
          seconteamImage={"/svg/watch/Liverpool.png"}
          seconteamName={"Liverpool"}
          date={"Aug 18 15:00"}
          place={"Old Trafford"}
          half={"2nd Half: 47’"}
        />
        <WhoWillWin/>
      </div>
    </section>
  );
};

export default page;
