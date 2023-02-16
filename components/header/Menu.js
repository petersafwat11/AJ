import React from 'react'
import classes from './menu.module.css'
import Image from 'next/image';
import Link from 'next/link';
export const Menu = () => {
  return (
    <div className={classes.menu}>
      <nav className={classes["menu-desktop"]}>
        <Image
          className={classes["menu-desktop-logo"]}
          src="/svg/LOGO.svg"
          alt="logo"
          width="133"
          height="107"
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
            <Link
              className={classes["menu-desktop-list-item"]}
              href="/statistics"
            >
              NEWS
            </Link>
          </li>
          <li>
            <Link className={classes["menu-desktop-list-item"]} href="/news">
              CONTACT
            </Link>
          </li>
        </ul>
        <div className={classes["menu-desktop-actions"]}>
          <button className={classes["menu-desktop-actions-button"]}>
            DONATIE
          </button>
          <button className={classes["menu-desktop-actions-button"]}>
            GIVEAWAY
          </button>
        </div>
      </nav>
      <nav className={classes["menu-mobie"]}></nav>
    </div>
  );
}
