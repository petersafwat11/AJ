import { useRouter } from "next/navigation";
import React from "react";
import classes from "./watchBtn.module.css";

const WatchBtn = ({ id }) => {
  const router = useRouter();

  return (
    <div className={classes["action-button"]}>
      <button
        onClick={() => {
          router.push(`/watch/${id}`, { scroll: true });
        }}
        className={classes["watch-button"]}
      >
        WATCH
      </button>
    </div>
  );
};

export default WatchBtn;
