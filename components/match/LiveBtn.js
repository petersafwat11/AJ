import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./liveBtn.module.css";

const LiveBtn = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, [3000]);
  }, []);
  const timer = useSelector((state) => state.timer);
  return !timer && !loading ? (
    <div className="live-button-div">
      <div className={classes["live-button"]}>
        <div className={classes["dot-wrapper"]}>
          <span></span>
        </div>
        <p>Live</p>
      </div>
    </div>
  ) : (
    <div className={classes["not-live"]}>LIVE</div>
  );
};

export default LiveBtn;
