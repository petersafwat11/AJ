import Image from "next/image";
import React from "react";
import classes from "./chatBody.module.css";
const ChatBody = ({ messages, getSubString, setMentionSomeone }) => {
  return (
    <div className={classes["chat-body"]}>
      <div className={classes["messages"]}>
        <div className={classes["message"]}>
          <div className={classes["user-image"]}>
            <Image
              className={classes["user-icon"]}
              src="/svg/chat/user-avatar.svg"
              alt="avatar"
              width="26"
              height="26"
            />
          </div>
          <div className={classes["message-data"]}>
            <h3 className={classes["username"]}>messiog10</h3>
            <p className={classes["message-text"]}>
              <span className={classes["mentioned"]}></span>
              Really excited for the match !!!!!
            </p>
          </div>
          <div className={classes["replay-wrapper"]}>
            <div className={classes["replay-icon-div"]}>
              <Image
                className={classes["replay-icon"]}
                src="/svg/chat/replay.svg"
                alt="replay"
                width="12"
                height="12"
              />
            </div>

            <span className={classes["tooltip"]}>Reply to user</span>
          </div>
        </div>
        <div className={classes["message"]}>
          <div className={classes["user-image"]}>
            <Image
              className={classes["user-icon"]}
              src="/svg/chat/user-avatar.svg"
              alt="avatar"
              width="26"
              height="26"
            />
            <p className={classes["you-text"]}>You</p>
          </div>

          <div className={classes["message-data"]}>
            {/* <h3 className={classes["username"]}>messiog10</h3> */}
            <p className={classes["message-text"]}>
              <span className={classes["mentioned"]}> @messiog10</span>
              Really excited for the match !!!!!
            </p>
          </div>
          <div className={classes["replay-wrapper"]}>
            <div className={classes["replay-icon-div"]}>
              <Image
                className={classes["replay-icon"]}
                src="/svg/chat/replay.svg"
                alt="replay"
                width="12"
                height="12"
              />
            </div>

            <span className={classes["tooltip"]}>Reply to user</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBody;
