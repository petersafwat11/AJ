import Image from "next/image";
import React from "react";
import classes from "./contact.module.css";

const Page = () => {
  const topics = [
    "Adding or removing users",
    "Billing and plans",
    "Connection Trouble ",
    "Notifications",
    "Managing Channels",
    "Signing in",
    "New design feedback",
    "Trial of a paid plan",
  ];
  return (
    <section className={classes["contact"]}>
      <h2 className={classes["heading"]}>Contact Us</h2>
      <div className={classes["container"]}>
        <div className={classes["input-group"]}>
          <label className={classes["label"]} htmlFor="email">
            Your email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Type your email..."
            className={classes["input"]}
          />
        </div>
        <div className={classes["topics"]}>
          <p className={classes["label"]}>Select a topic</p>
          <div className={classes["topics-options"]}>
            <div className={classes["topics-options-first"]}>
              {topics.slice(0, 3).map((item, index) => (
                <p key={index} className={classes["topic-option"]}>
                  {item}
                </p>
              ))}
            </div>
            <div className={classes["topics-options-second"]}>
              {topics.slice(3, 6).map((item, index) => (
                <p key={index} className={classes["topic-option"]}>
                  {item}
                </p>
              ))}
            </div>
            <div className={classes["topics-options-third"]}>
              {topics.slice(6, 8).map((item, index) => (
                <p key={index} className={classes["topic-option"]}>
                  {item}
                </p>
              ))}
            </div>
            <div className={classes["topics-mobile"]}>
              {topics.slice(0, 8).map((item, index) => (
                <p key={index} className={classes["topic-option"]}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="topic-title" className={classes["label"]}>
            Specify your topic
          </label>
          <input
            id="topic-title"
            type="text"
            placeholder="Type a topic..."
            className={classes["input"]}
          />
        </div>
        <div className={classes["input-group-textarea"]}>
          <label htmlFor="topic-message" className={classes["label"]}>
            Tell us what you need help with?
          </label>
          <textarea
            id="topic-message"
            placeholder="Type a message......"
            rows="4"
            className={classes["text-area"]}
          />
        </div>
        <button className={classes["send-button"]}>Send</button>
      </div>
      <div className={classes["contact-us-methods"]}>
        <div className={classes["contact-us-first"]}>
          <div className={classes["contact-us-item"]}>
            <Image
              className={classes["email-icon"]}
              src="/svg/contact/email.svg"
              alt="mail"
              width="27"
              height="27"
            />
            <p>info@ajsports.ch</p>
          </div>
          <div className={classes["contact-us-item"]}>
            <Image
              className={classes["phone-icon"]}
              src="/svg/contact/phone.svg"
              alt="phone"
              width="27"
              height="27"
            />
            <p>+7(4942)35-51-86</p>
          </div>
        </div>
        <div className={classes["contact-us-second"]}>
          <div className={classes["contact-us-item-second"]}>
            <Image
              className={classes["location-icon"]}
              src="/svg/contact/location.svg"
              alt=""
              width="22"
              height="30"
            />
            <p>Festival naya Ul, bld. 10, appt. 19, Kostroma, Russia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
