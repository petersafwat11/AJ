import React from "react";
import { Menu } from "./Menu";
import { MenuMobile } from "./Mobile-menu";
import TopHeader from "./TopHeader";
import classes from "./header.module.css";
const Header = () => {
  return (
    <>
      <header className={classes["header"]}>
        <TopHeader />
        <Menu />
      </header>
      <header className={classes["header-mobile"]}>
        <MenuMobile />
      </header>
    </>
  );
};

export default Header;
