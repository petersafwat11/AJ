import Image from "next/image";
import React from "react";
import classes from "./OtherPaymentMethod.module.css";
const OtherPaymentMethod = ({ title, data, message, toggle }) => {
  return (
    <div className={classes["payment-method"]}>
      <div className={classes["top"]}>
        <h2 className={classes["heading"]}>{title}</h2>
        <Image
          onClick={toggle}
          className={classes["exit"]}
          src="/svg/chat/exit-chat.svg"
          alt="exit"
          width="15"
          height="15"
        />
      </div>
      <div className={classes["data"]}>{data}</div>
      <div className={classes["thankful-message"]}>
        <p className={classes["message"]}>{message}</p>
        <button onClick={toggle} className={classes["paid-button"]}>
          Paid
        </button>
      </div>
    </div>
  );
};

export default OtherPaymentMethod;
