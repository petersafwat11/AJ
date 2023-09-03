"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useReducer } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ActionsButtons from "../../../../../components/dashboard/actionsButtons/ActionsButtons";
import ErrorMEssage from "../../../../../components/dashboard/errorMessage/ErrorMEssage";
import ChannelName from "../../../../../components/dashboard/streamLink/channelName/ChannelName";
import Preview from "../../../../../components/dashboard/streamLink/preview/Preview";
import StreamLink from "../../../../../components/dashboard/streamLink/streamLink/StreamLink";
import {
  deleteItem,
  getData,
  saveItem,
} from "../../../../../utils/dashboardHelperFunctions";
import classes from "./page.module.css";

const reducerIntialValue = {
  channelName: "",
  URL: "",
  // RMTPKey: "",
  error: "",
};
const streamLinkReducer = (state, action) => {
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
  } else if (action.type === "URL") {
    return { ...state, URL: action.value };
  } else {
    return state;
  }
  // else {
  //   return {
  //     ...state,
  //     RMTPKey: action.value,
  //   };
  // }
};

const Page = () => {
  const notify = (message, type) => toast[type](message);
  const pathname = usePathname();
  const router = useRouter();
  const [streamLink, dispatchDetail] = useReducer(
    streamLinkReducer,
    reducerIntialValue
  );
  const saveChanges = () => {
    saveItem(
      pathname,
      streamLink,
      dispatchDetail,
      notify,
      router,
      "streamLink"
    );
  };
  const deleteStreamLink = async () => {
    deleteItem(pathname, router, "streamLink");
  };

  useEffect(() => {
    pathname.split("/")[3] !== "create"
      ? getData(pathname.split("/")[3], dispatchDetail, "streamLink")
      : "";
  }, [pathname, router]);
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

      {!streamLink.error ? (
        <div>
          <h1 className={classes["title"]}>Edit Stream Link</h1>
          <div className={classes["actions"]}>
            <ActionsButtons
              firstButtonFunction={saveChanges}
              secondButtonFunction={deleteStreamLink}
              first={"Save"}
              second={"Delete"}
            />
          </div>
          <p className={classes["label"]}>Listing ID: 2</p>
          <div className={classes["details"]}>
            <ChannelName
              data={streamLink.channelName}
              dispatchDetail={dispatchDetail}
            />
            <div className={classes["details-wrapper"]}>
              <StreamLink
                data={{ URL: streamLink.URL }}
                dispatchDetail={dispatchDetail}
              />
              <Preview url={streamLink.URL} />
            </div>
          </div>
        </div>
      ) : (
        <ErrorMEssage
          message={"cant find content to this specific url"}
          router={router}
          pathname={pathname}
        />
      )}
    </div>
  );
};

export default Page;
