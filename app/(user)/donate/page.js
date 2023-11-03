"use client";
import React, { useState } from "react";
import Input from "../../../components/donate/input/Input";
import OtherPaymentMethod from "../../../components/donate/otherPaymentMethod/OtherPaymentMethod";
import Top from "../../../components/donate/top/Top";
import Marque from "../../../components/marque/Marque";
import PageTitle from "../../../components/pageTitle/PageTitle";
import Popup from "../../../components/popupWrapper/Popup";
import TopLayout from "../../../components/topLayout/TopLayout";
import classes from "./donate.module.css";
import Method from "../../../components/donate/method/Method";
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
    <div className="wrapper">
      <TopLayout />
      <div className="wrapper-2">
        <Marque />

        <main className={classes["donate"]}>
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
            <PageTitle title={"DONATE"} />

            <div className={classes["donate-wrapper-first"]}>
              <Top />
              <Input />
              <p className={classes["paragraph"]}>
                We highly appreciate any donations and invest the funds into our{" "}
                <br /> platform to provide a greater service to the fans
              </p>

              <div className={classes["donation-methods-first"]}>
                <div className={classes["pay-by-card"]}>PAY BY CARD</div>
                <div className={classes["or"]}>OR</div>

                <Method name={"paypal"} width={28} height={32}/>
                <Method name={"bitcoin"} width={23} height={30}/>
                <Method name={"stripe"} width={72} height={30}/>
                <Method name={"share"} width={20} height={34}/>
              </div>
            </div>
            <span className={classes["devider"]}></span>

            <div className={classes["donate-wrapper-second"]}>
              <div className={classes["donation-methods-second"]}>
                <Method name={"goggle-pay"} width={32} height={32} />
                <Method name={"apple-pay"} width={32} height={38}/>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Donate;
