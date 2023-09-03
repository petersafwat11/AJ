"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useReducer, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ActionsButtons from "../../../../../components/dashboard/actionsButtons/ActionsButtons";
import ServersAndLanguages from "../../../../../components/dashboard/createListings/serversAndLanguages/ServersAndLanguages";
import NoContent from "../../../../../components/dashboard/noContent/NoContent";
import { saveServer } from "../../../../../utils/dashboardHelperFunctions";
import { getData } from "../../../../../utils/dashboardTablePagesFunctions";
import { mainserversReducers } from "../../../../../utils/reducers/mainserversReducer";
import { otherServersReducer } from "../../../../../utils/reducers/otherServersReducer";
import classes from "./server.module.css";

const Page = () => {
  const notify = (message, type) => toast[type](message);

  const pathname = usePathname();
  const router = useRouter();
  const [existMatch, setExistedMatch] = useState(null);
  const [existServers, setExistedServers] = useState(null);
  const [servers, dispatchServer] = useReducer(mainserversReducers, {
    english: { checked: false, num: 0, channels: [] },
    arabic: { checked: false, num: 0, channels: [] },
    spanish: { checked: false, num: 0, channels: [] },
  });
  const [otherServers, dispatchOtherServer] = useReducer(otherServersReducer, {
    checked: false,
    num: 0,
    otherLangs: [],
  });
  const saveChanges = async () => {
    const data = {
      matchId: existMatch?._id,
      mainLanguages: { ...servers },
      moreLanguages: { ...otherServers },
    };
    let requestType = existServers ? "POST" : "Patch";
    await saveServer(
      pathname,
      data,
      dispatchServer,
      dispatchOtherServer,
      notify,
      router,
      "servers",
      existServers?._id,
      requestType
    );
  };
  useEffect(() => {
    console.dir(existServers);
    if (existServers?.moreLanguages && existServers?.mainLanguages) {
      dispatchServer({ type: "UPDATE-ALL", value: existServers.mainLanguages });
      dispatchOtherServer({
        type: "UPDATE-ALL",
        value: existServers.moreLanguages,
      });
    }
  }, [existServers]);
  useEffect(() => {
    const id = pathname.slice(pathname.lastIndexOf("/") + 1);
    const getServersData = async () => {
      const response = await getData(`sports/${id}`);
      const servers = await getData(`servers/${id}`);
      const match = response?.data?.data;
      const existServers = servers?.data?.data[0];
      setExistedMatch(match);
      setExistedServers(existServers);
      console.log("data fetched", existServers, match);
    };
    getServersData();
  }, [pathname, setExistedMatch, setExistedServers]);
  return (
    <div className={classes["container"]}>
      {existMatch ? (
        <div className="wrapper">
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

          <div className={classes["actions"]}>
            <ActionsButtons firstButtonFunction={saveChanges} first={"Save"} />
          </div>

          <div className={classes["servers-and-langs"]}>
            <ServersAndLanguages
              servers={servers}
              dispatchServer={dispatchServer}
              otherServers={otherServers}
              dispatchOtherServer={dispatchOtherServer}
            />
          </div>
        </div>
      ) : (
        <NoContent />
      )}
    </div>
  );
};

export default Page;