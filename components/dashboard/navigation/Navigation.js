"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { AiOutlineLink, AiOutlineWarning } from "react-icons/ai";
import { BiNews, BiUnlink, BiUser } from "react-icons/bi";
import { BsChatLeftDots } from "react-icons/bs";
import { FiGift, FiMail } from "react-icons/fi";
import { HiComputerDesktop } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { TbArrowsRightLeft } from "react-icons/tb";
import classes from "./navigation.module.css";
const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className={classes["nav"]}>
      <div className={classes["logo-wrapper"]}>
        <Image alt="logo" src="/svg/logo-login.svg" width="27" height="22" />
      </div>
      <BiUser
        onClick={() => {
          router.push("/dashboard");
        }}
        style={{ color: pathname === "/dashboard" ? "black" : "" }}
      />
      <TbArrowsRightLeft
        onClick={() => {
          router.push("/dashboard/sports-listings");
        }}
        style={{
          color: pathname.startsWith("/dashboard/sports-listings")
            ? "black"
            : "",
        }}
      />
      <HiComputerDesktop
        onClick={() => {
          router.push("/dashboard/channels-listings");
        }}
        style={{
          color: pathname.startsWith("/dashboard/channels-listings")
            ? "black"
            : "",
        }}
      />
      <BsChatLeftDots
        onClick={() => {
          router.push("/dashboard/chat-settings");
        }}
        style={{
          color: pathname === "/dashboard/chat-settings" ? "black" : "",
        }}
      />
      <AiOutlineWarning
        onClick={() => {
          router.push("/dashboard/reported-links");
        }}
        style={{
          color: pathname.startsWith("/dashboard/reported-links")
            ? "black"
            : "",
        }}
      />
      <RxQuestionMarkCircled
        onClick={() => {
          router.push("/dashboard/feedback");
        }}
        style={{
          color: pathname.startsWith("/dashboard/feedback") ? "black" : "",
        }}
      />
      <FiGift
        onClick={() => {
          router.push("/dashboard/giveaway-settings");
        }}
        style={{
          color: pathname.startsWith("/dashboard/giveaway-settings")
            ? "black"
            : "",
        }}
      />
      <AiOutlineLink
        onClick={() => {
          router.push("/dashboard/stream-links-listings");
        }}
        style={{
          color: pathname.startsWith("/dashboard/stream-links-listings")
            ? "black"
            : "",
        }}
      />
      <BiNews
        onClick={() => {
          router.push("/dashboard/news");
        }}
        style={{
          color: pathname == "/dashboard/news" ? "black" : "",
        }}
      />
      <FiMail
        onClick={() => {
          router.push("/dashboard/newsLetter");
        }}
        style={{
          color: pathname.startsWith("/dashboard/newsLetter") ? "black" : "",
        }}
      />

      <BiUnlink
        onClick={() => {
          router.push("/dashboard/edit-links");
        }}
        style={{
          color: pathname.startsWith("/dashboard/edit-links") ? "black" : "",
        }}
      />

      <IoSettingsOutline
        onClick={() => {
          router.push("/dashboard/admin-settings");
        }}
        style={{
          color: pathname.startsWith("/dashboard/admin-settings")
            ? "black"
            : "",
        }}
      />
    </div>
  );
};

export default Navigation;
