"use client";
import { useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
// import Marque from "../components/marque/marque";
import NewsLetter from "../components/news-letter/NewsLetter";
import Popup from "../components/news-letter/Popup";
import "../styles/globals.css";
import styles from "./layout.module.css";
export default function RootLayout({ children }) {
  const [showPopup, setShowPopup]= useState(true);
const hidePopup=()=>{
  setShowPopup(false)
}
  return (
    <html>
      <head />
      <body className={styles.wrapper}>
        <Header />
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
