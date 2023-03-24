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
  const router = useRouter();

  return (
    <div>
      <div className={classes["menu-mobile"]}>
        {showMenu ? (
          <Image
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className={classes["menu-mobile-icon"]}
            src="/svg/menu-icon.svg"
            alt="menu"
            width="28"
            height="15"
          />
        ) : (
          <Image
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className={classes["menu-mobile-icon"]}
            src="/svg/menu-icon.svg"
            alt="menu"
            width="28"
            height="15"
          />
        )}
        <Image
          className={classes["menu-mobile-logo"]}
          src="/logo-mobile.svg"
          alt="logo"
          width="76"
          height="59"
        />
      </div>
      <div
        style={{ top: showMenu ? "74px" : "-100%" }}
        className={classes["side-menu"]}
      >
        {/* <div className={classes["menu-top"]}>
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
        </div> */}
        <div className={classes["menu-mobile-lang"]}>
          <p>العربية</p>
          <p className={classes["menu-mobile-lang-english"]}>English </p>
          <p>Español</p>
        </div>
        <div className={classes["menu-mobile-pages-links"]}>
          <div>
            <p
              onClick={() => {
                router.push("/");
              }}
              className={classes["menu-mobile-page-link"]}
            >
              SPORTS{" "}
            </p>
            <span className={classes["devider"]}> </span>
          </div>

          <div>
            <p
              onClick={() => {
                router.push("/channels");
              }}
              className={classes["menu-mobile-page-link"]}
            >
              CHANNELS
            </p>
            <span className={classes["devider"]}> </span>
          </div>
          <div>
            <p
              onClick={() => {
                router.push("/statistics");
              }}
              className={classes["menu-mobile-page-link"]}
            >
              STATISTICS
            </p>
            <span className={classes["devider"]}> </span>
          </div>
          <div>
            <p
              onClick={() => {
                router.push("/news");
              }}
              className={classes["menu-mobile-page-link"]}
            >
              NEWS
            </p>

            <span className={classes["devider"]}> </span>
          </div>
          <div>
            <p
              onClick={() => {
                router.push("/contact");
              }}
              className={classes["menu-mobile-page-link"]}
            >
              CONTACT
            </p>

            <span className={classes["devider"]}> </span>
          </div>
        </div>
        <div className={classes["contact-us"]}>
          <div className={classes["buttons"]}>
            <button className={classes["donate-button"]}>DONATE</button>
            <button className={classes["giveaway-button"]}>GIVEAWAY</button>
          </div>
        </div>
        <div className={classes["social"]}>
          <div className={classes["social-element"]}>
            <Image
              src="/svg/social-icons/twitter.svg"
              alt="twitter-icon"
              width="20"
              height="20"
            />
          </div>
          <div className={classes["social-element"]}>
            <Image
              src="/svg/social-icons/facebook.svg"
              alt="facebook-icon"
              width="20"
              height="20"
            />
          </div>
          <div className={classes["social-element"]}>
            <Image
              src="/svg/social-icons/social.svg"
              alt="social-icon"
              width="20"
              height="20"
            />
          </div>
          <div className={classes["social-element"]}>
            <Image
              src="/svg/social-icons/insta.svg"
              alt="insta-icon"
              width="20"
              height="20"
            />
          </div>
          <div className={classes["social-element"]}>
            <Image
              src="/svg/social-icons/ticktok.svg"
              alt="tiktok-icon"
              width="20"
              height="20"
            />
          </div>
          <div className={classes["social-element"]}>
            <Image
              src="/svg/social-icons/telegram.svg"
              alt="telegram-icon"
              width="20"
              height="20"
            />
          </div>
        </div>
        <div className={classes["different-leagues"]}>
          <div className={classes["league"]}>
            <Image
              className={classes["league-image"]}
              src="/svg/stats/one.svg"
              alt="leageu"
              width="28"
              height="28"
            />
            <p> World Cup</p>
          </div>
          <div className={classes["league"]}>
            <Image
              className={classes["league-image"]}
              src="/svg/stats/one.svg"
              alt="leageu"
              width="28"
              height="28"
            />
            <p> UFFA Nations league</p>
          </div>
          <div className={classes["league"]}>
            <Image
              className={classes["league-image"]}
              src="/svg/stats/one.svg"
              alt="leageu"
              width="28"
              height="28"
            />
            <p> Champions league</p>
          </div>
          <div className={classes["league"]}>
            <Image
              className={classes["league-image"]}
              src="/svg/stats/one.svg"
              alt="leageu"
              width="28"
              height="28"
            />
            <p>Premier League</p>
          </div>
          <div className={classes["league"]}>
            <Image
              className={classes["league-image"]}
              src="/svg/stats/one.svg"
              alt="leageu"
              width="28"
              height="28"
            />
            <p>Europa League</p>
          </div>
          <div className={classes["league"]}>
            <Image
              className={classes["league-image"]}
              src="/svg/stats/one.svg"
              alt="leageu"
              width="28"
              height="28"
            />
            <p>La Liga league</p>
          </div>
          <div className={classes["league"]}>
            <Image
              className={classes["league-image"]}
              src="/svg/stats/one.svg"
              alt="leageu"
              width="28"
              height="28"
            />
            <p>Bundesliga</p>
          </div>
          <div className={classes["league"]}>
            <Image
              className={classes["league-image"]}
              src="/svg/stats/one.svg"
              alt="leageu"
              width="28"
              height="28"
            />
            <p>Ligue 1 </p>
          </div>
          <div className={classes["league"]}>
            <Image
              className={classes["league-image"]}
              src="/svg/stats/one.svg"
              alt="leageu"
              width="28"
              height="28"
            />
            <p>Serie A </p>
          </div>{" "}
        </div>
      </div>
      {/* {showMenu && (
        <div
          onClick={() => {
            setShowMenu(false);
          }}
          className={classes["overlay"]}
        ></div>
      )} */}
    </div>
  );
};
