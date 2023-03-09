"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import classes from "./menu.module.css";
export const Menu = () => {
  const router = useRouter();
  return (
    <div className={classes.menu}>
      <nav className={classes["menu-desktop"]}>
        <Image
          onClick={() => {
            router.push("/");
          }}
          className={classes["menu-desktop-logo"]}
          src="/LOGO.svg"
          alt="logo"
          width="104"
          height="80"
        />
        <ul className={classes["menu-desktop-list"]}>
          <li>
            <Link className={classes["menu-desktop-list-item"]} href="/">
              SPORTS
            </Link>
          </li>
          <li>
            <Link
              className={classes["menu-desktop-list-item"]}
              href="/channels"
            >
              CHANNELS
            </Link>
          </li>
          <li>
            <Link
              className={classes["menu-desktop-list-item"]}
              href="/statistics"
            >
              STATISTICS
            </Link>
          </li>
          <li>
            <Link className={classes["menu-desktop-list-item"]} href="/news">
              NEWS
            </Link>
          </li>
          <li>
            <Link className={classes["menu-desktop-list-item"]} href="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
        <div className={classes["menu-desktop-actions"]}>
          <button
            onClick={() => {
              router.push("/donate");
            }}
            className={classes["menu-desktop-actions-button"]}
          >
            DONATE
          </button>
          <button
            onClick={() => {
              router.push("/give-away");
            }}
            className={classes["menu-desktop-actions-button"]}
          >
            GIVEAWAY
          </button>
        </div>
      </nav>
    </div>
  );
};

export const MenuMobile = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <div className={classes["menu-mobile"]}>
        <Image
          onClick={() => {
            setShowMenu(!showMenu);
          }}
          className={classes["menu-mobile-icon"]}
          src="/svg/menu-icon.svg"
          alt="menu"
          width="28"
          height="16"
        />
        <Image
          className={classes["menu-mobile-logo"]}
          src="/svg/mobile-menu-logo.svg"
          alt="logo"
          width="76"
          height="62"
        />
      </div>
      <div
        style={{ left: showMenu ? "0" : "-100%" }}
        className={classes["side-menu"]}
      >
        <div className={classes["menu-top"]}>
          <div className={classes["menu-top-links"]}>
            <p className={classes["menu-top-links-1"]}>Tab Direct link 1</p>
            <p className={classes["menu-top-links-2"]}>Tab Direct link 2</p>
          </div>
          <Image
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className={classes["menu-top-icon"]}
            src="/svg/menu-icon-2.svg"
            alt="menu"
            width="28"
            height="16"
          />
        </div>
        <div className={classes["menu-mobile-lang"]}>
          <p>العربية</p>
          <p className={classes["menu-mobile-lang-english"]}>English </p>
          <p>Español</p>
        </div>
        <div className={classes["menu-mobile-pages-links"]}>
          <p className={classes["menu-mobile-page-link"]}>SPORTS </p>
          <p className={classes["menu-mobile-page-link"]}> CHANNELS </p>
          <p className={classes["menu-mobile-page-link"]}> STATISTICS </p>
          <p className={classes["menu-mobile-page-link"]}> NEWS </p>
          <p className={classes["menu-mobile-page-link"]}> DONATE </p>
          <p className={classes["menu-mobile-page-link"]}> GIVEAWAY</p>
        </div>
        <div className={classes["menu-mobile-social"]}>
          <Image
            className={classes["menu-mobile-social-item"]}
            src="/svg/menu/twitter.svg"
            alt="twitter"
            width="40"
            height="40"
          />
          <Image
            className={classes["menu-mobile-social-item"]}
            src="/svg/menu/facebook.svg"
            alt="facebook"
            width="40"
            height="40"
          />
          <Image
            className={classes["menu-mobile-social-item"]}
            src="/svg/menu/social.svg"
            alt="social"
            width="40"
            height="40"
          />
          <Image
            className={classes["menu-mobile-social-item"]}
            src="/svg/menu/insta.svg"
            alt="insta"
            width="40"
            height="40"
          />
          <Image
            className={classes["menu-mobile-social-item"]}
            src="/svg/menu/tiktok.svg"
            alt="tiktok"
            width="40"
            height="40"
          />
          <Image
            className={classes["menu-mobile-social-item"]}
            src="/svg/menu/telegram.svg"
            alt="telegram"
            width="40"
            height="40"
          />
        </div>
      </div>
      {showMenu && (
        <div
          onClick={() => {
            setShowMenu(false);
          }}
          className={classes["overlay"]}
        ></div>
      )}
    </div>
  );
};
