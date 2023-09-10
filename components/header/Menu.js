"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import classes from "./menu.module.css";
export const Menu = () => {
  const router = useRouter();
  return (
    <nav className={classes["nav"]}>
      <ul style={{ listStyle: "none" }} className={classes["nav-list"]}>
        <li>
          <Link className={classes["list-item"]} href="/">
            SPORTS
          </Link>
        </li>
        <li>
          <Link className={classes["list-item"]} href="/channels">
            CHANNELS
          </Link>
        </li>
        <li>
          <Link className={classes["list-item"]} href="/statistics">
            STATISTICS
          </Link>
        </li>
        <li>
          <Link className={classes["list-item"]} href="/news">
            NEWS
          </Link>
        </li>
        <li>
          <Link className={classes["list-item"]} href="/contact-us">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};
