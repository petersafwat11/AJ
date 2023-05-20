
"use client";
import React from "react";
import { useEffect, useState } from "react";
import Header from "../header/Header";
// import Marque from "../components/marque/marque";
import Image from "next/image";
import Marque from "../marque/Marque";
import Popup from "../popupWrapper/Popup";
import SendMessage, { SendMessageButton } from "../send-message/SendMessage";
import styles from "./TopLayout.module.css";

const TopLayout = () => {
  const [showPopup, setShowPopup] = useState(true);
  const hidePopup = () => {
    setShowPopup(false);
  };
  const [showSendMessage, setShowSendMessage] = useState(false);
  const toggleSendMessageComponent = () => {
    setShowSendMessage(!showSendMessage);
    console.log("clicked", showSendMessage);
  };
  const [showScrollTopIcon, setShowScrollTopIcon] = useState(false);
  const updateDimensions = () => {
    if (window.scrollY > 350) {
      setShowScrollTopIcon(true);
    } else {
      setShowScrollTopIcon(false);
    }
    console.log(window.scrollY, "scroll");
  };
  useEffect(() => {
    window.addEventListener("scroll", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const scrollToTopPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Header />
      <SendMessageButton
        toggleSendMessageComponent={toggleSendMessageComponent}
      />
      {showSendMessage && (
        <Popup>
          <SendMessage
            toggleSendMessageComponent={toggleSendMessageComponent}
          />
        </Popup>
      )}
      {showScrollTopIcon && (
        <Image
          onClick={scrollToTopPage}
          className={styles["scroll-top"]}
          src="/svg/scroll-top.svg"
          alt="scroll-top"
          width="30"
          height="30"
        />
      )}
      <a
        href="https://t.me/ajsportstv"
        target={"_blank"}
        className={styles["telegram-link"]}
        rel="noreferrer"
      >
        <Image
          className={styles["telegram-icon"]}
          src="/svg/telegram-floating.svg"
          alt="telegram-channel"
          width="30"
          height="30"
        />
      </a>
    </div>
  );
};

export default TopLayout;
