"use client";
import React, { useState } from "react";
import classes from "./contactInfo.module.css";
const ContactInfo = () => {
  const [contactInfo, setContactInfo] = useState({
    Email: "",
    Telephone: "",
    Address: "",
  });
  return (
    <div className={classes["container"]}>
      <div className={classes["details"]}>
        <div className={classes["input-group"]}>
          <label htmlFor="Email" className={classes["label"]}>
            Email
          </label>
          <input
            value={contactInfo.Email}
            id="Email"
            onChange={(e) => {
              setContactInfo({ ...contactInfo, Email: e.target.value });
            }}
            placeholder="Email"
            className={classes["input"]}
          />
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="Telephone" className={classes["label"]}>
            Telephone
          </label>
          <input
            value={contactInfo.Telephone}
            id="Telephone"
            onChange={(e) => {
              setContactInfo({ ...contactInfo, Telephone: e.target.value });
            }}
            placeholder="Telephone"
            className={classes["input"]}
          />
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="Address" className={classes["label"]}>
            Address
          </label>
          <input
            value={contactInfo.Address}
            id="Address"
            onChange={(e) => {
              setContactInfo({ ...contactInfo, Telephone: e.target.value });
            }}
            placeholder="Address"
            className={classes["input"]}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
