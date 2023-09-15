import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import classes from "./watchBtn.module.css";

import { useSelector } from "react-redux";

const WatchBtn = ({ id }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, [3000]);
  }, []);

  const timer = useSelector((state) => state.timer);
  const router = useRouter();

  return (
    <div className={classes["action-button"]}>
      <button
        onClick={() => {
          // if (!timer && !loading) {
          router.push(`/watch/${id}`);
          // }
        }}
        className={timer ? classes["disabled"] : classes["watch-button"]}
      >
        WATCH
      </button>
    </div>
  );
};

export default WatchBtn;
