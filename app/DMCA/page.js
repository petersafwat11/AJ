import Image from "next/image";
import React from "react";
import classes from "./DMCA.module.css";
const page = () => {
  return (
    <section className={classes["DMCA"]}>
      <div className={classes["top-heading"]}>
        <h2 className={classes["top-heading-title"]}>DMCA</h2>
        <span></span>
      </div>
      <div className={classes["container"]}>
        <div className={classes["disclaimer"]}>
          <h3 className={classes["disclaimer-heading"]}>Disclaimer</h3>
          <div className={classes["disclaimer-para"]}>
            <p>
              AJ Sports merely links/embeds content uploaded to popular media
              hosting websites such Vimeo.com, Dailymotion.com, Youtube.com,
              twitch.tv, reddit.com, etc. AJSports does not host any audiovisual
              content itself and has no ability to modify such content. We thus
              cannot accept any liability for the content transmitted by others
              as we are not affiliated nor endorsed by the external content. All
              content is copyright of their respective owners.
            </p>
            <p>
              If you find any copyrighted content, we ask that you kindly
              contact us on our email, info@ajsports.ch , we will remove it
              immediately.
            </p>
          </div>
        </div>
        <div className={classes["second-part"]}>
          <div className={classes["companies-logoes"]}>
            <Image
              src="/svg/DMCA/netflix.svg"
              alt="netflix"
              width="114"
              height="30"
            />
            <Image
              src="/svg/DMCA/vimeo.svg"
              alt="vimeo"
              width="105"
              height="29"
            />
            <Image
              src="/svg/DMCA/dailymotion.svg"
              alt="dailymotion"
              width="165"
              height="30"
            />
            <Image
              src="/svg/DMCA/google.svg"
              alt="google"
              width="110"
              height="36"
            />
            <Image
              src="/svg/DMCA/twitch.svg"
              alt="twitch"
              width="93"
              height="30"
            />
            <Image
              src="/svg/DMCA/youtube.svg"
              alt="youtube"
              width="127"
              height="27"
            />
          </div>
          <button className={classes['contact-us-button']}>CONTACT US</button>
        </div>
      </div>
    </section>
  );
};

export default page;
