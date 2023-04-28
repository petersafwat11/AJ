"use client";

import React, { useState } from "react";
import classes from "./vpnAndCasino.module.css";
const VpnAndCasino = () => {
  const [bannersLinks, setBannersLinks] = useState({
    VPN: "",
    Casino: "",
  });
  return (
    <div className={classes["container"]}>
      <div className={classes["details"]}>
        <div className={classes["input-group"]}>
          <label htmlFor="VPN" className={classes["label"]}>
            VPN Banner Link
          </label>
          <input
            value={bannersLinks.VPN}
            id="VPN"
            onChange={(e) => {
              setBannersLinks({ ...bannersLinks, VPN: e.target.value });
            }}
            placeholder="VPN Banner Link"
            className={classes["input"]}
          />
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="Casino" className={classes["label"]}>
            Casino Banner Link
          </label>
          <input
            value={bannersLinks.Casino}
            id="Casino"
            onChange={(e) => {
              setBannersLinks({ ...bannersLinks, Casino: e.target.value });
            }}
            placeholder="Casino Banner Link"
            className={classes["input"]}
          />
        </div>
      </div>
    </div>
  );
};

export default VpnAndCasino;
