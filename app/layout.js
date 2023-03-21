"use client";
import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
// import Marque from "../components/marque/marque";
import Image from "next/image";
import NewsLetter from "../components/news-letter/NewsLetter";
import Popup from "../components/popupWrapper/Popup";
import SendMessage, {
  SendMessageButton,
} from "../components/send-message/SendMessage";
import "../styles/globals.css";
import styles from "./layout.module.css";
export default function RootLayout({ children }) {
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
    <html>
      <head />
      <body className={styles.wrapper}>
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
        {/* <Marque /> */}
        {/* {showPopup && (
          <div className={styles["popup"]}>
            <Popup hidePopup={hidePopup} />
          </div>
        )} */}
        {children}
        <NewsLetter />
        <Footer />
      </body>
    </html>
  );
}
