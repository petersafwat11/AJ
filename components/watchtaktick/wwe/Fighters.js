import Image from "next/image";
import React from "react";
import classes from "./fighters.module.css";
const Fighters = () => {
  return (
    <div className={classes["fighters"]}>
      <Image
        className={classes["logo"]}
        src="/svg/watch/wwe/logo.svg"
        alt="logo"
        width="42"
        height="40"
      />

      <h3 className={classes["title"]}>FEATURED FIGHERS</h3>
      <div className={classes["players-stats-container"]}>
        {["Age: 32", "Age: 32", "Age: 32"].map((item, index) => (
          <div className={classes["item"]} key={index}>
            <div className={classes["player-item"]} key={index}>
              <h4>K. NURMAGHOV</h4>
              <p>{item}</p>
            </div>
            <div className={classes["player-item"]} key={index}>
              <h4>C. MCGREGOR</h4>
              <p>{item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fighters;
