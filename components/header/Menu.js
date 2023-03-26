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

