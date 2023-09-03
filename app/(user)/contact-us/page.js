"use client";
import React from "react";
import ContactForm from "../../../components/contactUS/contactForm/ContactForm";
import ReachUs from "../../../components/contactUS/reachUs/ReachUs";
import Marque from "../../../components/marque/Marque";
import TopLayout from "../../../components/topLayout/TopLayout";
import classes from "./contact.module.css";

const Page = () => {
  return (
    <div className="wrapper">
      <TopLayout />
      <div className="wrapper-2">
        <Marque />

        <section className={classes["contact"]}>
          <h2 className={classes["heading"]}>Contact Us</h2>
          <ContactForm />
          <ReachUs />
        </section>
      </div>
    </div>
  );
};

export default Page;
