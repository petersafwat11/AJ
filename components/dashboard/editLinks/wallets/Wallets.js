"use client";
import React, { useState } from "react";
import classes from "./wallets.module.css";
const Wallets = () => {
  const [walletsLinks, setWalletsLinks] = useState({
    BitcoinAddress: "",
    EthereumAddress: "",
    PayByCardURL: "",
    Stripe: "",
    Paypal: "",
  });
  return (
    <div className={classes["container"]}>
      <div className={classes["first"]}>
        <div className={classes["input-group"]}>
          <label htmlFor="Bitcoin" className={classes["label"]}>
            Bitcoin Address
          </label>
          <input
            value={walletsLinks.BitcoinAddress}
            id="Bitcoin"
            onChange={(e) => {
              setWalletsLinks({
                ...walletsLinks,
                BitcoinAddress: e.target.value,
              });
            }}
            placeholder="Bitcoin Address"
            className={classes["input"]}
          />
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="Ethereum" className={classes["label"]}>
            Ethereum Address
          </label>
          <input
            value={walletsLinks.EthereumAddress}
            id="Ethereum"
            onChange={(e) => {
              setWalletsLinks({ ...walletsLinks, Ethereum: e.target.value });
            }}
            placeholder="Ethereum"
            className={classes["input"]}
          />
        </div>
      </div>
      <div className={classes["second"]}>
        <div className={classes["input-group"]}>
          <label htmlFor="Card" className={classes["label"]}>
            Pay By Card URL
          </label>
          <input
            value={walletsLinks.PayByCardURL}
            id="Card"
            onChange={(e) => {
              setWalletsLinks({
                ...walletsLinks,
                PayByCardURL: e.target.value,
              });
            }}
            placeholder="Pay By Card URL"
            className={classes["input"]}
          />
        </div>
        <div className={classes["input-group"]}>
          <label htmlFor="Stripe" className={classes["label"]}>
            Stripe
          </label>
          <input
            value={walletsLinks.Stripe}
            id="Tiktok"
            onChange={(e) => {
              setWalletsLinks({ ...walletsLinks, Stripe: e.target.value });
            }}
            placeholder="Stripe"
            className={classes["input"]}
          />
        </div>
      </div>
      <div className={classes["third"]}>
        <div className={classes["input-group"]}>
          <label htmlFor="Paypal" className={classes["label"]}>
            Paypal
          </label>
          <input
            value={walletsLinks.Paypal}
            id="Paypal"
            onChange={(e) => {
              setWalletsLinks({ ...walletsLinks, Paypal: e.target.value });
            }}
            placeholder="Paypal"
            className={classes["input"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Wallets;
