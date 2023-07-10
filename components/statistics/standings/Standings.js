import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import classes from "./standings.module.css";
const Standings = () => {
  return (
    <section className={classes["standings"]}>
      <Header />
      <span className={classes["devider"]}></span>
      <Body />
      <span className={classes["devider-2"]}></span>
      <Footer />
    </section>
  );
};

export default Standings;
