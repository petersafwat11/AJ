"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ActionsButtons from "../../../../../components/dashboard/actionsButtons/ActionsButtons";
import ChannelName from "../../../../../components/dashboard/channelsListings/channelName/ChannelName";
import Mode from "../../../../../components/dashboard/channelsListings/mode/Mode";
import StreamLinks from "../../../../../components/dashboard/channelsListings/streamLinks/StreamLinks";
import {
  deleteItem,
  getData,
  saveItem,
} from "../../../../../utils/dashboardHelperFunctions";
import { getData as getStreamLinks } from "../../../../../utils/dashboardTablePagesFunctions";
import classes from "./pages.module.css";

const reducerIntialValue = {
  channelName: "",
  mode: null,
  streamLinkName: "",
  streamLinkUrl: "",
  error: "",
  streamLinksAvaiable: [],
};
const channelReducer = (state, action) => {
  console.log("state", state);
  if (action.type === "CLEAR-ALL") {
    return reducerIntialValue;
  } else if (action.type === "NOT-FOUND") {
    return { ...state, error: action.value };
  }
  if (action.type === "UPDATE-ALL") {
    return action.value;
  }
  if (action.type === "CHANNEL-NAME") {
    return { ...state, channelName: action.value };
  } else if (action.type === "MODE") {
    if (state.mode === action.value) {
      return { ...state, mode: null };
    }
    return { ...state, mode: action.value };
  } else if (action.type === "STREAM-LINK") {
    return {
      ...state,
      streamLinkName: action.streamLinkName,
      streamLinkUrl: action.streamLinkUrl,
    };
  } else {
    return {
      ...state,
      streamLinksAvaiable: action.value,
    };
  }
};

const Page = () => {
  const notify = (message, type) => toast[type](message);
  const pathname = usePathname();
  const router = useRouter();
  const [channel, dispatchDetail] = useReducer(
    channelReducer,
    reducerIntialValue
  );
  const saveChanges = () => {
    saveItem(pathname, channel, dispatchDetail, notify, router, "channels");
  };
  const deleteChannel = async () => {
    deleteItem(pathname, router, "channels");
  };

  useEffect(() => {
    pathname.split("/")[3] !== "create"
      ? getData(pathname.split("/")[3], dispatchDetail, "channels")
      : "";
  }, [pathname, router]);
  useEffect(() => {
    const getStreamData = async () => {
      const StreamLinks = await getStreamLinks("streamLink", {
        page: 1,
        limit: undefined,
      });
      dispatchDetail({
        type: "STREAM-LINKS-AVAILABLE",
        value: StreamLinks.data.data.map((item) => {
          return { streamLinkName: item.channelName, streamLinkUrl: item.URL };
        }),
      });
    };
    getStreamData();
  }, []);
  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Channels Listings</h1>
      <div className={classes["actions"]}>
        <ActionsButtons
          firstButtonFunction={saveChanges}
          secondButtonFunction={deleteChannel}
          first={"Save"}
          second={"Delete"}
        />
      </div>
      <p className={classes["label"]}>Listing ID: 2</p>

      <div className={classes["details"]}>
        <div className={classes["details-wrapper"]}>
          <ChannelName
            data={channel.channelName}
            dispatchDetail={dispatchDetail}
          />
          <Mode data={channel.mode} dispatchDetail={dispatchDetail} />
        </div>
        <StreamLinks
          streamLinksAvaiable={channel.streamLinksAvaiable}
          streamLinkName={channel.streamLinkName}
          dispatchDetail={dispatchDetail}
        />
      </div>
    </div>
  );
};

export default Page;
