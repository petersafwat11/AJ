import React from "react";
import ActionsButtons from "../../../components/dashboard/actionsButtons/ActionsButtons";
import ContactInfo from "../../../components/dashboard/editLinks/contactInfo/ContactInfo";
import Domains from "../../../components/dashboard/editLinks/domains/Domains";
import ProtectedBadge from "../../../components/dashboard/editLinks/protected-badge/ProtectedBadge";
import Social from "../../../components/dashboard/editLinks/social/Social";
import VpnAndCasino from "../../../components/dashboard/editLinks/vpnAndCasino/VpnAndCasino";
import Wallets from "../../../components/dashboard/editLinks/wallets/Wallets";
import classes from "./page.module.css";
const page = () => {
  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Edit Links</h1>
      <div className={classes["actions"]}>
        <ActionsButtons first={"Save"} second={"Delete"} />
      </div>

      <div className={classes["details"]}>
        <div className={classes["first"]}>
          <div className={classes["details-wrapper"]}>
            <Social />
            <Domains />
          </div>
          <div className={classes["details-wrapper"]}>
            <ProtectedBadge />
            <ContactInfo />
          </div>
        </div>
        <div className={classes["second"]}>
          <Wallets />
          <VpnAndCasino />
        </div>
      </div>
    </div>
  );
};

export default page;
