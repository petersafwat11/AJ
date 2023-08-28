"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./newsLetter.module.css";

const NewsLetter = () => {
  const notify = (message, type) => toast[type](message);

  const [email, setEmail] = useState({ email: "" });
  const addToNewsletter = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.BACKEND_SERVER}/newsletter`,
        email,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      notify(
        "Thank you for contacting us! We will get back to you soon.",
        "success"
      );
    } catch (error) {
      notify(
        error.response.data.error?.errors
          ? Object.values(error.response.data.error.errors)[0].message
          : error.response.data.message,
        "error"
      );
    }
  };

  const router = useRouter();
  return (
    <div className={classes["news-letter"]}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
        theme="dark"
      />

      <div className={classes["container"]}>
        <div className={classes["news-letter-first"]}>
          <h3 className={classes["title"]}>
            Get Notified for Every Major Event that takes Place!
          </h3>
          <p className={classes["para"]}>
            Sign up to our email newsletter to receive regular updates on all
            the major events that arise, so you never miss out!
          </p>
        </div>
        <div className={classes["news-letter-second"]}>
          <div className={classes["notify"]}>
            <input
              value={email.email}
              onChange={(e) => {
                setEmail({ email: e.target.value });
              }}
              className={classes["notify-input"]}
              type="email"
              placeholder="Enter email address"
            />
            <button
              onClick={(e) => {
                addToNewsletter(e);
              }}
              // type="submit"
              className={classes["notify-button"]}
            >
              Notify me
            </button>
          </div>
          <p className={classes["news-letter-second-para"]}>
            We care about the protection of your data. read our{" "}
            <span
              onClick={() => {
                router.push("/privacy-policy");
              }}
            >
              Privacy policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
