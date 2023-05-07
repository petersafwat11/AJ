"use client";
import React from "react";
import { BsSkype, BsSnapchat, BsYoutube } from "react-icons/bs";
import { FaDiscord, FaPinterestP, FaRegCopy } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import classes from "./shareLinks.module.css";
const ShareLinks = ({ toggleShareLinks }) => {
  // const manipaletePosition = useRef(null);
  // const [position, setPosition] = useState(0);
  // const [clicks, setClicks] = useState(0);
  // const maxClicks = 2;
  // useEffect(() => {
  //   console.log("position", position);
  //   if (clicks <= maxClicks) {
  //     manipaletePosition.current.style.left = -position + "px";
  //   }
  // }, [position, setPosition, clicks]);

  return (
    <div className={classes["share-links"]}>
      <div className={classes["share-links-top"]}>
        <h3 className={classes["share-links-title"]}>Share a link</h3>
        <RxCross1 onClick={toggleShareLinks} className={classes["exit"]} />
      </div>
      <div className={classes["share-links-body"]}>
        <div
          // ref={manipaletePosition}
          className={classes["share-links-websites"]}
        >
          <div className={classes["share-links-website"]}>
            <div className={classes["share-links-website-logo"]}>
              <div className={classes["pinterest"]}>
                <FaPinterestP className={classes["pinterest-icon"]} />
              </div>
            </div>
            <p>Pinterest</p>
          </div>
          <div className={classes["share-links-website"]}>
            <div className={classes["share-links-website-logo"]}>
              <BsYoutube className={classes["youtube-icon"]} />
            </div>
            <p>Youtube</p>
          </div>{" "}
          <div className={classes["share-links-website"]}>
            <div className={classes["share-links-website-logo"]}>
              <BsSnapchat className={classes["spantube-icon"]} />
            </div>
            <p>Snapchat</p>
          </div>{" "}
          <div className={classes["share-links-website"]}>
            <div className={classes["share-links-website-logo"]}>
              <FaDiscord className={classes["discord-icon"]} />
            </div>
            <p>Discord</p>
          </div>
          <div className={classes["share-links-website"]}>
            <div className={classes["share-links-website-logo"]}>
              <MdEmail className={classes["email-icon"]} />
            </div>
            <p>Email</p>
          </div>
          <div className={classes["share-links-website"]}>
            <div className={classes["share-links-website-logo"]}>
              <BsSkype className={classes["skype-icon"]} />
            </div>
            <p>Skype</p>
          </div>
        </div>
      </div>
      <div className={classes["share-links-bottom"]}>
        https://www.ajsports.ch/watch/manutdvsliverpool/Share...
        <FaRegCopy className={classes["copy-icon"]} />
        {/* <div className={classes["share-links-copy"]}>
          <Image
            src="/svg/share-links/copy.svg"
            alt="copy"
            width="21"
            height="21"
          />
        </div> */}
      </div>
    </div>
  );
};

export default ShareLinks;
