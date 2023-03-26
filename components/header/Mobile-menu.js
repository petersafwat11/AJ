"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import classes from "./mobile-menu.module.css";

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
        style={{ top: showMenu ? "0" : "-100%" }}
        className={classes["side-menu"]}
      >
        <Image
          onClick={() => {
            setShowMenu(!showMenu);
          }}
          className={classes["exit"]}
          src="/svg/mobile-menu/exit.svg"
          alt="donate"
          width="13"
          height="13"
        />

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
          </div>
        </div>
        <div className={classes["contact-us"]}>
          <div className={classes["buttons"]}>
            <button className={classes["donate-button"]}>
              <Image
                className={classes["donate-icon"]}
                src="/svg/mobile-menu/donate.svg"
                alt="donate"
                width="22"
                height="22"
              />
            </button>
            <button className={classes["giveaway-button"]}>
              <Image
                className={classes["giveaway-icon"]}
                src="/svg/mobile-menu/giveaway.svg"
                alt="giveaway"
                width="19"
                height="19"
              />
            </button>
          </div>
        </div>
        <div className={classes["social"]}>
          <div className={classes["social-element"]}>
            <Image
              src="/svg/social-icons/twitter.svg"
              alt="twitter-icon"
              width="19"
              height="16"
            />
          </div>
          <div className={classes["social-element"]}>
            <Image
              src="/svg/social-icons/facebook.svg"
              alt="facebook-icon"
              width="19"
              height="19"
            />
          </div>
          <div className={classes["social-element"]}>
            <Image
              src="/svg/social-icons/social.svg"
              alt="social-icon"
              width="19"
              height="19"
            />
          </div>
          <div className={classes["social-element"]}>
            <Image
              src="/svg/social-icons/insta.svg"
              alt="insta-icon"
              width="20"
              height="19"
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
              width="19"
              height="19"
            />
          </div>
        </div>
        <div className={classes["different-leagues"]}>
          <div className={classes["league"]}>
            <Image
              className={classes["league-image"]}
              src="/svg/mobile-menu/1.svg"
              alt="leageu"
              width="31"
              height="36"
            />
            <p> World Cup</p>
          </div>
          <div className={classes["league"]}>
            <Image
              className={classes["league-image"]}
              src="/svg/mobile-menu/2.svg"
              alt="leageu"
              width="25"
              height="31"
            />
            <p> UFFA Nations league</p>
          </div>
          <div className={classes["league"]}>
            <Image
              className={classes["league-image"]}
              src="/svg/mobile-menu/3.svg"
              alt="leageu"
              width="32"
              height="33"
            />
            <p> Champions league</p>
          </div>
          <div className={classes["league"]}>
            <Image
              className={classes["league-image"]}
              src="/svg/mobile-menu/4.svg"
              alt="leageu"
              width="31"
              height="31"
            />
            <p>Premier League</p>
          </div>
          <div className={classes["league"]}>
            <Image
              className={classes["league-image"]}
              src="/svg/mobile-menu/5.svg"
              alt="leageu"
              width="32"
              height="34"
            />
            <p>Europa League</p>
          </div>
          <div className={classes["league"]}>
            <Image
              className={classes["league-image"]}
              src="/svg/mobile-menu/6.svg"
              alt="leageu"
              width="31"
              height="32"
            />
            <p>La Liga league</p>
          </div>
          <div className={classes["league"]}>
            <Image
              className={classes["league-image"]}
              src="/svg/mobile-menu/7.svg"
              alt="leageu"
              width="33"
              height="32"
            />
            <p>Bundesliga</p>
          </div>
          <div className={classes["league"]}>
            <Image
              className={classes["league-image"]}
              src="/svg/mobile-menu/8.svg"
              alt="leageu"
              width="35"
              height="35"
            />
            <p>Ligue 1 </p>
          </div>
          <div className={classes["league"]}>
            <Image
              className={classes["league-image"]}
              src="/svg/mobile-menu/9.svg"
              alt="leageu"
              width="31"
              height="34"
            />
            <p>Serie A </p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};