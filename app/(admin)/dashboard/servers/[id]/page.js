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
  const [streamLinksAvaiable, setStreamLinksAvaiable] = useState([]);
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
    let requestType = existServers ? "PATCH" : "POST";
    console.log("existServers", existServers);
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
      const match = response?.data;
      const existServers = servers?.data?.data[0];
      console.log(match, existServers);

      setExistedMatch(match);
      setExistedServers(existServers);
      console.log("data fetched", response, servers);
    };
    getServersData();
  }, [pathname, setExistedMatch, setExistedServers]);
  useEffect(() => {
    const getStreamData = async () => {
      const StreamLinks = await getData("streamLink", {
        page: 1,
        limit: 0,
      });
      console.log("StreamLinks", StreamLinks);
      const streamLinksAvaiable = StreamLinks.data.data.map((item) => {
        return { streamLinkName: item.channelName, streamLinkUrl: item.URL };
      });
      setStreamLinksAvaiable(streamLinksAvaiable);
    };
    getStreamData();
  }, []);

  return (
    <div className={classes["container"]}>
      {existMatch ? (
        <div className={classes["wrapper"]}>
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
              streamLinksAvaiable={streamLinksAvaiable}
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
