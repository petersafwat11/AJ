"use client";

import React, { useState } from "react";
import classes from "./protectedBadge.module.css";
const ProtectedBadge = () => {
  const [protectedBadge, setProtectedBadge] = useState("");
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Protected Badge</h2>
      <input
        value={protectedBadge}
        onChange={(e) => {
          setProtectedBadge(e.target.value);
        }}
        placeholder="Protected Badge"
        className={classes["input"]}
      />
    </div>
  );
};

export default ProtectedBadge;
