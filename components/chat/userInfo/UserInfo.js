"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import classes from "./userInfo.module.css";
const UserInfo = ({ toggleChangeAvatar, selectedAvatar, toggleUserInf }) => {
  const [notValid, setNotValid] = useState();
  const handleSignIn = () => {
    signIn("google", {
      callbackUrl: `${process.env.FRONTEND_SERVER}/channels`,
    });
  };
  return (
    <div className={classes["user-info"]}>
      <div className={classes["user-info-top"]}>
        <div className={classes["selected-avatar"]}>
          <Image src={selectedAvatar} alt="avatar" height="105" width="91" />
        </div>
        <button
          onClick={toggleChangeAvatar}
          className={classes["change-button"]}
        >
          CHANGE
        </button>
      </div>
      <div className={classes["user-info-body"]}>
        <p className={classes["user-info-para"]}>Your Display Name</p>
        <div className={classes["user-data"]}>
          <input
            style={{
              border: notValid
                ? "2px solid rgba(255, 0, 0, 0.7)"
                : "2px solid transparent",
            }}
            className={classes["user-data-input"]}
            type="text"
            placeholder="Enter username...."
          />
          {notValid && (
            <img
              className={classes["not-valid"]}
              src="/svg/chat/not-valid-icon.svg"
              width="16"
            />
          )}
        </div>
        {notValid && (
          <p className={classes["taken-message"]}>Username not available</p>
        )}
      </div>
      <button onClick={handleSignIn}>
        <Image
          src="/svg/chat/signin-icons/goggle.svg"
          alt="avatar"
          height="20"
          width="20"
        />
      </button>

      <div className={classes["user-info-actions"]}>
        <button className={classes["confirm-button"]}>Confirm </button>
        <button onClick={toggleUserInf} className={classes["cancel-button"]}>
          cancel{" "}
        </button>
      </div>
    </div>
  );
};
export default UserInfo;
