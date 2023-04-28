"use client";
import React, { useState } from "react";
import Marque from "../../components/marque/Marque";
import Popup from "../../components/popupWrapper/Popup";
import SendMessage from "../../components/send-message/SendMessage";
import TopLayout from "../../components/topLayout/TopLayout";
import classes from "./FAQ.module.css";
const Page = () => {
  const FAQ = [
    {
      question: "Are all streams free to watch?",
      answer:
        "Yes, all of our matches and streams are completely free to watch and we will not charge you a single penny!",
    },
    {
      question: "Why are there adverts?",
      answer:
        "The adverts that are displayed to you help us fund this incredible platform for all fans for free. We ask that you kindly tolerate them and cross them off to continue with your stream.",
    },
    {
      question: "Is this safe?",
      answer:
        "Our platform is 100% safe to use and users are protected through various modern technologies.",
    },
    {
      question: "Will this work in all countries?",
      answer:
        "Yes, all of our streams work in every country. All a user needs is internet access and to navigate to our website. However, some ISP’s may block the stream, if that is the case, use a VPN.",
    },
    {
      question: "Why is the stream not working?",
      answer:
        "In the very rare occurrence of a stream or server is not functioning, we kindly ask all users to press “Report Link” above the web player and send us a report. We will aim to fix it within 5-10 minutes.",
    },
    {
      question: "Why is the stream lagging?",
      answer:
        "This occurs as your internet connection is not stable. Please consider using a lower quality which is changeable by pressing the settings icon in the bottom right of the web player. In the very rare occurrence of the issue being server-sided, please click “Report Link” above the web player and send us a report. We will aim to fix the stream within 5-10 minutes.",
    },
    {
      question: "When do you announce giveaways?",
      answer:
        "We generally do monthly giveaways with big prizes such as PlayStations, XBOX, Laptops, Phones etc. The giveaways will commence on the 1st of every month and winners will be selected 2 days before the month ends.",
    },
    {
      question: "Do you accept donations?",
      answer:
        "We accept donations in various payment methods available on our DONATE page including, all major debit & credit cards, PayPal, Bitcoin and Stripe.We highly appreciate any donations and invest the funds into our platform to provide a greater service to the fans!",
    },
    {
      question: "Why is the match I want not available?",
      answer:
        "We try our best to cover all sports and leagues whether big or small, however we may be unaware of a specific one we do not provide. In this case, we ask that you kindly fill our the feedback form which is accessible from the left side of the screen on all pages and the bottom of this page. Please mention anything we do not provide and we will aim to cover it within 2 days.",
    },
    {
      question: "Why is the language I want not available?",
      answer:
        "We try our best to cover all languages for every match, however, some sports and matches do not offer certain languages.If the channel is available for a certain language, we will put it all under the stream for you to easily access. If you know of a channel for a language we do not provide, kindly send us the details of it and what sport or league using the feedback form accessible on the left. We will aim to add this channel to all future streams within 2 days.",
    },
    {
      question: "Will your site be seized?",
      answer:
        "As we do not host the content of our streams, we are not of any threat to authorities and therefore our website will remain forever.In the rare case that our official website www.ajsports.ch does get taken down, we have 20 other domains which is displayed to you at the top of the page. Kindly note them down and we will always be up and running!Ensure to join our Telegram Channel and Follow us on Twitter.",
    },
  ];
  const [feedBackMessage, setFeedBackMessage] = useState(false);
  const toggleSendMessageComponent = () => {
    setFeedBackMessage(!feedBackMessage);
  };
  return (
    <div className={classes["wrapper"]}>
      <TopLayout />
      <div className={classes["wrapper-2"]}>
        <Marque />

        <section className={classes["FAQ"]}>
          {feedBackMessage && (
            <Popup>
              <SendMessage
                toggleSendMessageComponent={toggleSendMessageComponent}
              />
            </Popup>
          )}
          <div className={classes["top-heading"]}>
            <h2 className={classes["top-heading-title"]}>FAQ</h2>
            <span></span>
          </div>
          <div className={classes["container"]}>
            {/* <span className={classes['back-icon']}>Back</span> */}
            <div className={classes["container-heading"]}>
              <h3 className={classes["container-heading-title"]}>
                Frequently Asked Questions
              </h3>
              <p className={classes["container-heading-para"]}>
                The ultimate sports streaming platform’s F.A.Q
              </p>
            </div>
            <div className={classes["questions-wrapper"]}>
              {FAQ.map((elem, index) => (
                <div key={index} className={classes["question-wrapper"]}>
                  <h4 className={classes["question-wrapper-question"]}>
                    {elem.question}
                  </h4>
                  <p className={classes["question-wrapper-answer"]}>
                    {elem.answer}
                  </p>
                </div>
              ))}
            </div>
            <div className={classes["uesr-feedback"]}>
              <h4 className={classes["uesr-feedback-heading"]}>
                Have any other questions?
              </h4>
              <p className={classes["uesr-feedback-para"]}>
                You may ask us any other question you may have by navigating to
                the contact page. Using our feedback form please enlist all the
                channels, sports, languages or leagues that you require, we will
                fulfil your needs within one week.
              </p>
              <button
                onClick={() => {
                  setFeedBackMessage(!feedBackMessage);
                }}
                className={classes["uesr-feedback-button"]}
              >
                Feedback
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
