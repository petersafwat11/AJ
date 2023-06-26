import Image from "next/image";
import React from "react";
import classes from "./social.module.css";
const Social = () => {
  return (
    <div className={classes["header-social"]}>
      <Image
        src="/svg/social-icons/twitter.svg"
        alt="twitter-icon"
        width="21"
        height="21"
      />
      <Image
        src="/svg/social-icons/facebook.svg"
        alt="facebook-icon"
        width="21"
        height="21"
      />
      <Image
        src="/svg/social-icons/social.svg"
        alt="social-icon"
        width="21"
        height="21"
      />
      <Image
        src="/svg/social-icons/insta.svg"
        alt="insta-icon"
        width="21"
        height="21"
      />
      <Image
        src="/svg/social-icons/ticktok.svg"
        alt="tiktok-icon"
        width="21"
        height="21"
      />
      <Image
        src="/svg/social-icons/telegram.svg"
        alt="telegram-icon"
        width="21"
        height="21"
      />
    </div>
  );
};

export default Social;
