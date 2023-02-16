import React from 'react'
import Image from "next/image";
import classes from './footer.module.css'
const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <div className={classes["footer-container"]}>
        <div className={classes["footer-container-first"]}>
          <div className={classes["footer-container-image"]}>
            <Image
              src="/svg/LOGO-FOOTER.svg"
              alt="logo"
              width="186"
              height="163"
            />
          </div>
          <div className={classes["footer-container-disclaimer"]}>
            <h3>Disclaimer</h3>
            <p>
              AJ Sports merely links/embeds content uploaded to popular media
              hosting websites such Vimeo.com, Dailymotion.com, Youtube.com,
              twitch.tv, reddit.com, etc. AJ Sports does not host any
              audio-visual content itself and has no ability to modify such
              content. We thus cannot accept any liability for the content
              transmitted by others as we are not affiliated nor endorsed by the
              external content. All content is copyright of their respective
              owners. AJ Sports operates as a search engine for streams and
              videos already hosted publicly on the world wide web. For any
              legal issues please contact appropriate media file owners.
            </p>
            <p className={classes['contact-email']}>Email: info@ajsports.ch</p>
            <div className={classes["footer-actions"]}>
              <button className={classes["protected-button"]}>PROTECTED</button>
              <button className={classes["dmca-button"]}>DMCA</button>
            </div>
          </div>
        </div>

        <div className={classes["footer-container-second"]}>
          <div className={classes["footer-container-links"]}>
            <h4 className={classes["footer-container-links-heading"]}>
              Quick Menus
            </h4>
            <ul className={classes["footer-container-links-list"]}>
              <li className={classes["footer-container-links-list-item"]}>
                About Us
              </li>
              <li className={classes["footer-container-links-list-item"]}>
                Contact Us
              </li>
              <li className={classes["footer-container-links-list-item"]}>
                Donate
              </li>
              <li className={classes["footer-container-links-list-item"]}>
                Giveaways
              </li>
            </ul>
          </div>
          <div className={classes["footer-container-links"]}>
            <h4 className={classes["footer-container-links-heading"]}>
              Statistics
            </h4>
            <ul className={classes["footer-container-links-list"]}>
              <li className={classes["footer-container-links-list-item"]}>
                Premier League
              </li>
              <li className={classes["footer-container-links-list-item"]}>
                Champions League
              </li>
              <li className={classes["footer-container-links-list-item"]}>
                Ligue 1
              </li>
              <li className={classes["footer-container-links-list-item"]}>
                La Liga
              </li>
            </ul>
          </div>
          <div className={classes["footer-container-links"]}>
            <h4 className={classes["footer-container-links-heading"]}>
              Sports
            </h4>
            <nav className={classes["footer-container-links-list"]}>
              <li className={classes["footer-container-links-list-item"]}>
                NFL
              </li>
              <li className={classes["footer-container-links-list-item"]}>
                Basketball
              </li>
              <li className={classes["footer-container-links-list-item"]}>
                Football
              </li>
              <li className={classes["footer-container-links-list-item"]}>
                Boxing
              </li>
              <li className={classes["footer-container-links-list-item"]}>
                Others
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer