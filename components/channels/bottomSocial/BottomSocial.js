import React, { useCallback, useEffect, useState } from "react";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { TfiTwitterAlt } from "react-icons/tfi";
import { getData } from "../../../utils/dashboardTablePagesFunctions";
import classes from "./bottomSocial.module.css";
const BottomSocial = () => {
  const [social, setSocial] = useState({
    telegram: "",
    twitter: "",
    discord: "",
  });
  const fetchNewData = useCallback(async (query) => {
    try {
      const response = await getData("links", query);
      const Allsocial = response.data?.data[0]?.social;
      delete Allsocial.facebook;
      delete Allsocial.tiktok;
      setSocial(Allsocial);
      console.log("response links", response.data?.data[0]?.social);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchNewData({ fields: "social" });
    console.log("will fetch");
  }, [fetchNewData]);
  return (
    <div className={classes["container"]}>
      <h4 className={classes["text"]}>Our Socials</h4>
      <div className={classes["icons"]}>
        <a
          rel="noreferrer"
          target="_blank"
          className={classes["link"]}
          href={social.discord}
        >
          <FaDiscord />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          className={classes["link"]}
          href={social.twitter}
        >
          <TfiTwitterAlt />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          className={classes["link"]}
          href={social.telegram}
        >
          <FaTelegramPlane />
        </a>
      </div>
    </div>
  );
};

export default BottomSocial;
