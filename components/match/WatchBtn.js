import { useRouter } from "next/navigation";
import React from "react";
import classes from "./watchBtn.module.css";

const WatchBtn = ({ id, watch }) => {
  const router = useRouter();
  console.log("live", watch);

  return (
    <div className={classes["action-button"]}>
      <button
        onClick={() => {
          if (watch) {
            router.push(`/watch/${id}`);
          }
        }}
        className={!watch ? classes["disabled"] : classes["watch-button"]}
      >
        WATCH
      </button>
    </div>
  );
};

export default WatchBtn;
