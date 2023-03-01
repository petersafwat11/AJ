import Image from "next/image";
import React from "react";
import OtherPaymentMethod from "../../components/donate/otherPaymentMethod/OtherPaymentMethod";
import classes from "./donate.module.css";
const donate = () => {
  return (
    <main className={classes["donate"]}>
      <OtherPaymentMethod
        title={"ETH (Ethereum Wallet)"}
        data={"0x5c7f5ca94419a446002b16aa4b335221300e86e3"}
        message={
          "Please send any Ethereum donations to the above wallet address, we highly appreciate it!"
        }
      />
      <OtherPaymentMethod
        title={"BTC (Bitcoin Wallet)"}
        data={"0x5C7f5cA94419A446002b16aA4B335221300E86E3"}
        message={
          "Please send any Bitcoin donations to the above wallet address, we highly appreciate it!"
        }
      />
      <div className={classes["container"]}>
        <div className={classes["donate-heading"]}>
          <h2 className={classes["heading"]}>DONATE</h2>
          <span></span>
        </div>
        <div className={classes["donate-wrapper"]}>
          <div className={classes["donate-options"]}>
            <p className={classes["donate-option"]}>£1</p>
            <p className={classes["donate-option"]}>£2</p>
            <p className={classes["donate-option"]}>£3</p>
            <p className={classes["donate-option"]}>£5</p>
            <p className={classes["donate-option"]}>£10</p>
            <p className={classes["donate-option"]}>Other Amount</p>
          </div>
          <input
            placeholder="£"
            type="text"
            className={classes["donate-input"]}
          />
          <div className={classes["pay-by-card"]}>PAY BY CARD</div>
          <div className={classes["or"]}>OR</div>
          <div className={classes["donation-methods"]}>
            <div className={classes["paypal"]}>
              <Image
                src="/svg/donate/paypal.svg"
                alt="paypall"
                width="52"
                height="26"
              />
            </div>
            <div className={classes["bitcoin"]}>
              <Image
                src="/svg/donate/bitcoin.svg"
                alt="bitcoin"
                width="35"
                height="34"
              />
            </div>
            <div className={classes["stripe"]}>
              <Image
                src="/svg/donate/stripe.svg"
                alt="stripe"
                width="60"
                height="24"
              />
            </div>
            <div className={classes["share"]}>
              <Image
                src="/svg/donate/share.svg"
                alt="share"
                width="24"
                height="24"
              />
            </div>
          </div>
        </div>
        <p className={classes["paragraph"]}>
          We highly appreciate any donations and invest the <br /> funds into
          our platform to provide a greater service to the fans
        </p>
      </div>
    </main>
  );
};

export default donate;
