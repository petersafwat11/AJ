"use client";
import React, { useState } from "react";
import Marque from "../../../components/marque/Marque";
import TopLayout from "../../../components/topLayout/TopLayout";
import UnderDevelopment from "../../../components/underDevelopment/page/underDevelopment";
import classes from "./donate.module.css";
const Donate = () => {
  const [ethereumPopup, setEthereumPopup] = useState(false);
  const [bitcoinPopup, setBitcoinPopup] = useState(false);
  const [donationValue, setDonationValue] = useState(null);
  const toggleEthereum = () => {
    setEthereumPopup(!ethereumPopup);
  };
  const toggleBitcoin = () => {
    setBitcoinPopup(!bitcoinPopup);
  };
  const [showSendMessage, setShowSendMessage] = useState(false);
  const toggleSendMessageComponent = () => {
    setShowSendMessage(!showSendMessage);
  };

  return (
    <div className={classes["wrapper"]}>
      <TopLayout />
      <div className={classes["wrapper-2"]}>
        <Marque />

        {/* <main className={classes["donate"]}>
          {ethereumPopup && (
            <Popup>
              <OtherPaymentMethod
                toggle={toggleEthereum}
                title={"ETH (Ethereum Wallet)"}
                data={"0x5c7f5ca94419a446002b16aa4b335221300e86e3"}
                message={
                  "Please send any Ethereum donations to the above wallet address, we highly appreciate it!"
                }
              />
            </Popup>
          )}

          {bitcoinPopup && (
            <Popup>
              <OtherPaymentMethod
                toggle={toggleBitcoin}
                title={"BTC (Bitcoin Wallet)"}
                data={"0x5C7f5cA94419A446002b16aA4B335221300E86E3"}
                message={
                  "Please send any Bitcoin donations to the above wallet address, we highly appreciate it!"
                }
              />
            </Popup>
          )}
          <div className={classes["container"]}>
            <div className={classes["donate-heading"]}>
              <h2 className={classes["heading"]}>DONATE</h2>
              <span></span>
            </div>
            <div className={classes["donate-wrapper"]}>
              <div className={classes["donate-options"]}>
                <p
                  onClick={() => {
                    setDonationValue(1);
                  }}
                  className={classes["donate-option"]}
                >
                  $1
                </p>
                <p
                  onClick={() => {
                    setDonationValue(2);
                  }}
                  className={classes["donate-option"]}
                >
                  $2
                </p>
                <p
                  onClick={() => {
                    setDonationValue(3);
                  }}
                  className={classes["donate-option"]}
                >
                  $3
                </p>
                <p
                  onClick={() => {
                    setDonationValue(5);
                  }}
                  className={classes["donate-option"]}
                >
                  $5
                </p>
                <p
                  onClick={() => {
                    setDonationValue(10);
                  }}
                  className={classes["donate-option"]}
                >
                  $10
                </p>
                <p className={classes["donate-option"]}>Other Amount</p>
              </div>
              <div className={classes["input-wrapper"]}>
                {donationValue && <span>$</span>}
                <input
                  onChange={(e) => {
                    setDonationValue(e.target.value);
                  }}
                  value={donationValue}
                  placeholder="$"
                  type="text"
                  // style={{ paddingLeft: donationValue !== null ? "3rem" : "" }}
                  className={classes["donate-input"]}
                />
              </div>

              <div className={classes["pay-by-card"]}>PAY BY CARD</div>
              <div className={classes["or"]}>OR</div>
              <div className={classes["donation-methods"]}>
                <div className={classes["paypal"]}>
                  <Image
                    src="/svg/donate/paypal.svg"
                    alt="paypall"
                    width="36"
                    height="42"
                  />
                </div>
                <div onClick={toggleBitcoin} className={classes["bitcoin"]}>
                  <Image
                    src="/svg/donate/bitcoin.svg"
                    alt="bitcoin"
                    width="29"
                    height="36"
                  />
                </div>
                <div className={classes["stripe"]}>
                  <Image
                    src="/svg/donate/stripe.svg"
                    alt="stripe"
                    width="87"
                    height="39"
                  />
                </div>
                <div onClick={toggleEthereum} className={classes["share"]}>
                  <Image
                    src="/svg/donate/ethereum.svg"
                    alt="share"
                    width="25"
                    height="38"
                  />
                </div>
              </div>
            </div>
            <p className={classes["paragraph"]}>
              We highly appreciate any donations and invest the <br /> funds
              into our platform to provide a greater service to the fans
            </p>
          </div>
        </main> */}
        <div className="center">
          <UnderDevelopment />
        </div>
      </div>
    </div>
  );
};

export default Donate;
