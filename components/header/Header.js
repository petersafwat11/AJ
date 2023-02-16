import React from "react";
import classes from "./header.module.css";
import Image from "next/image";
import { Menu } from "./Menu";
const Header = () => {
  return (
    <header className={classes['header']}>
      <div className={classes["header-top"]}>
        <p>
          We apologize for the quantity of ads shown on the <br/> website. This helps
          to keep our platform run seamlessly.
        </p>
      </div>
      <div className={classes["header-social"]}>
        <Image
          src="/svg/social-icons/twitter.svg"
          alt="twitter-icon"
          width="24"
          height="20"
        />
        <Image
          src="/svg/social-icons/facebook.svg"
          alt="facebook-icon"
          width="24"
          height="24"
        />
        <Image
          src="/svg/social-icons/social.svg"
          alt="social-icon"
          width="24"
          height="20"
        />
        <Image
          src="/svg/social-icons/insta.svg"
          alt="insta-icon"
          width="24"
          height="24"
        />
        <Image
          src="/svg/social-icons/ticktok.svg"
          alt="tiktok-icon"
          width="24"
          height="24"
        />
        <Image
          src="/svg/social-icons/telegram.svg"
          alt="telegram-icon"
          width="24"
          height="24"
        />
      </div>
      <div className={classes["header-lang"]}>
        <p>العربية </p>
        <p>English</p>
        <p>Español</p>
      </div>
      <Menu/>
    </header>
  );
};

export default Header;
