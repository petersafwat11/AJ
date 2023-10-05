"use client";
import React, { useCallback, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { getData } from "../../utils/dashboardTablePagesFunctions";
import classes from "./marque.module.css";
const Marque = () => {
  const [domains, setDomains] = useState([]);
  const fetchNewData = useCallback(async (query) => {
    try {
      const response = await getData("links", query);
      console.log("domains", response?.data?.data[0]?.domains);
      setDomains(response?.data?.data[0]?.domains?.split(" "));
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchNewData({ fields: "domains" });
    console.log("will fetch");
  }, [fetchNewData]);

  return (
    <div className={classes["xx"]}>
      <div className={classes["marque-container"]}>
        <Marquee
          speed={20}
          gradientWidth={50}
          gradientColor={[0.2, 0.7, 0.5]}
          gradient={false}
        >
          <div className={classes["marque-container-tag"]}>
            <span>Alternative Domains -</span>
            {domains && domains.map((dom, index) => <p key={index}>{dom}</p>)}
            {/* <p>www.ajsports.pro</p>
            <p>www.ajsports.soccer</p>
            <p>www.ajsports.us</p>
            <p>www.ajsportstv.ch</p>
            <p>www.ajsports.vip</p>
            <p>www.ajsports.watch</p>
            <p>www.ajsports.xyz</p>
            <p>www.ajsports.app</p>
            <p>www.ajsports.football</p>
            <p>www.ajsports.cc</p>
            <p>www.ajsports.games</p>
            <p>www.ajsports.info</p>
            <p>www.ajsports.io</p>
            <p>www.ajsports.life</p>
            <p>www.ajsports.gay</p>
            <p>www.ajsports.asia</p>
            <p>www.ajsports.lol</p>
            <p>www.9goaltv.us</p>
            <p>www.9goal.app</p> */}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Marque;
