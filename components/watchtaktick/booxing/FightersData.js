import React from 'react'
import classes from './fightersData.module.css'
const FightersData = () => {
  return (
    <div className={classes["fighters"]}>
    <h3 className={classes["title"]}>MAIN CARD</h3>
    <div className={classes["players-stats-container"]}>
      {["20-3-0", "20-3-0", "20-3-0"].map((item, index) => (
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
    <h3 className={classes["title-2"]}>PRELIMINARY CARD</h3>
    <div className={classes["players-stats-container"]}>
      {["20-3-0", "20-3-0", "20-3-0"].map((item, index) => (
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
)
}

export default FightersData;