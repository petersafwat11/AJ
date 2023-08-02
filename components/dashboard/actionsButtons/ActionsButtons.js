"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import classes from "./actionsButtons.module.css";
const ActionsButtons = ({ first, second }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className={classes["actions"]}>
      {first && (
        <button
          onClick={() => {
            first === "Create Listing" ? router.push(`/${pathname}/edit`) : "";
          }}
          className={classes["first-button"]}
        >
          {first}
        </button>
      )}
      {second && <button className={classes["second-button"]}>{second}</button>}
    </div>
  );
};

export default ActionsButtons;
