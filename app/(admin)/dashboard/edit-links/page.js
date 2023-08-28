"use client";
import axios from "axios";
import React, { useCallback, useEffect, useReducer, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ActionsButtons from "../../../../components/dashboard/actionsButtons/ActionsButtons";
import ContactInfo from "../../../../components/dashboard/editLinks/contactInfo/ContactInfo";
import Domains from "../../../../components/dashboard/editLinks/domains/Domains";
import Giveaway from "../../../../components/dashboard/editLinks/giveaway/Giveaway";
import ProtectedBadge from "../../../../components/dashboard/editLinks/protected-badge/ProtectedBadge";
import Social from "../../../../components/dashboard/editLinks/social/Social";
import VpnAndCasino from "../../../../components/dashboard/editLinks/vpnAndCasino/VpnAndCasino";
import Wallets from "../../../../components/dashboard/editLinks/wallets/Wallets";
import linksReducer from "../../../../components/dashboard/reducers/linkReducer";
import classes from "./page.module.css";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const notify = (message, type) => toast[type](message);

  const [intialFetched, setIntailFetched] = useState(null);
  const fetchLinks = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.BACKEND_SERVER}/links`);
      dispachNewLink({ type: "FETCH-ALL", value: response.data.data.data[0] });
      setIntailFetched(response.data.data.data[0]);
    } catch (error) {
      console.log("err", error);
    }
  }, []);
  useEffect(() => {
    fetchLinks();
  }, [fetchLinks]);
  const [importedLinks, dispachNewLink] = useReducer(linksReducer, {});

  // buttons action functions
  const saveChanges = async () => {
    const id = importedLinks._id;
    const modifiedLinks = { ...importedLinks };
    delete modifiedLinks._id;

    try {
      const updateLinks = await axios.patch(
        `${process.env.BACKEND_SERVER}/links/${id}`,
        JSON.stringify(modifiedLinks), // Convert to JSON string
        {
          headers: {
            "Content-Type": "application/json", // Set the content type header
          },
        }
      );
      notify(
        "Thank you for contacting us! We will get back to you soon.",
        "success"
      );
    } catch (error) {
      notify(
        error.response.data.error?.errors
          ? Object.values(error.response.data.error.errors)[0].message
          : error.response.data.message,
        "error"
      );
    }
  };
  const cancelChanges = () => {
    dispachNewLink({ type: "RESET-ALL", value: intialFetched });
  };
  return (
    <div className={classes["container"]}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
        theme="dark"
      />

      <h1 className={classes["title"]}>Edit Links</h1>
      <div className={classes["actions"]}>
        <ActionsButtons
          firstButtonFunction={saveChanges}
          secondButtonFunction={cancelChanges}
          first={"Save"}
          second={"Cancel"}
        />
      </div>

      {importedLinks && (
        <div className={classes["details"]}>
          <div className={classes["first"]}>
            <div className={classes["details-wrapper"]}>
              <Social
                dispachNewLinks={dispachNewLink}
                data={importedLinks.social}
              />
              <Domains
                dispachNewLinks={dispachNewLink}
                data={importedLinks.domains}
              />
            </div>
            <div className={classes["details-wrapper"]}>
              <ProtectedBadge
                dispachNewLinks={dispachNewLink}
                data={importedLinks.protectedBadge}
              />
              <ContactInfo
                dispachNewLinks={dispachNewLink}
                data={importedLinks.contactUS}
              />
            </div>
          </div>
          <div className={classes["second"]}>
            <Wallets
              dispachNewLinks={dispachNewLink}
              data={importedLinks.payment}
            />
            <VpnAndCasino
              dispachNewLinks={dispachNewLink}
              data={importedLinks.banners}
            />
          </div>
          <div className={classes["third"]}>
            <Giveaway
              dispachNewLinks={dispachNewLink}
              data={importedLinks.giveaway}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
