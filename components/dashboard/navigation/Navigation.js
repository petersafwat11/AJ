import React from "react";
import classes from "./navigation.module.css";
import { BiUser } from "react-icons/bi";
import { TbArrowsRightLeft } from "react-icons/tb";
import { HiComputerDesktop } from "react-icons/hi2";
import { BsChatLeftDots } from "react-icons/bs";
import { AiOutlineWarning } from "react-icons/ai";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { FiGift } from "react-icons/fi";
import Image from "next/image";
const Navigation = () => {
  return (
    <div className={classes["nav"]}>
      <div className={classes["logo-wrapper"]}>
        <Image alt="logo" src="/svg/logo-login.svg" width="27" height="22" />
      </div>

      <BiUser />
      <TbArrowsRightLeft />
      <HiComputerDesktop />
      <BsChatLeftDots />
      <AiOutlineWarning />
      <RxQuestionMarkCircled />
      <FiGift />
    </div>
  );
};

export default Navigation;
