"use client";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import classes from "./sendMessage.module.css";
const SendMessage = ({
  toggleSendMessageComponent,
  toggleMessageSentComponent,
}) => {
  const notify = (message, type) => toast[type](message);

  const [message, setMessage] = useState("");
  const sendFeedback = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.BACKEND_SERVER}/feedback`,
        { message: message },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toggleMessageSentComponent();
    } catch (error) {
      notify(
        error.response.data.error?.errors
          ? Object.values(error.response.data.error.errors)[0].message
          : error.response.data.message,
        "error"
      );
      console.log('error', error);
    }
  };

  return (
    <div className={classes["send-message"]}>
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

      <div className={classes["send-message-top"]}>
        <h3 className={classes["heading"]}>Feedback</h3>
        <Image
          onClick={toggleSendMessageComponent}
          className={classes["exit"]}
          src="/svg/chat/exit-chat.svg"
          alt="exit"
          width="15"
          height="15"
        />
      </div>
      <div className={classes["send-message-body"]}>
        <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className={classes["text-area"]}
          placeholder="Type a message..."
        />
        <p className={classes["send-message-para"]}>
          We care about your feedback and aim to adhere to your needs
          immediately.
        </p>
        <button
          onClick={(e) => {
            sendFeedback(e);
          }}
          className={classes["send-button"]}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default SendMessage;

export const SendMessageButton = ({ toggleSendMessageComponent }) => {
  return (
    <div
      onClick={toggleSendMessageComponent}
      className={classes["send-message-button"]}
    >
      <p>Feedback</p>
    </div>
  );
};
