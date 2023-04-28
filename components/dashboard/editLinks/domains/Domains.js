"use client";

import React, { useState } from "react";
import classes from "./domains.module.css";
const Domains = () => {
  const [domain, setDomain] = useState("");
  return (
    <div className={classes["container"]}>
      <h2 className={classes["title"]}>Domains</h2>
      <input
        value={domain}
        onChange={(e) => {
          setDomain(e.target.value);
        }}
        placeholder="domain"
        className={classes["input"]}
      />
    </div>
  );
};

export default Domains;
