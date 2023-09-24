"use client";
import { usePathname, useRouter } from "next/navigation";
import ActionsButtons from "../../../../components/dashboard/actionsButtons/ActionsButtons";
import RNG from "../../../../components/dashboard/giveaway/RNG/RNG";
import Date from "../../../../components/dashboard/giveaway/date/Date";
import Description from "../../../../components/dashboard/giveaway/description/Description";
import PrizeImage from "../../../../components/dashboard/giveaway/prizeImage/PrizeImage";
import Reset from "../../../../components/dashboard/giveaway/reset/reset";
import Table from "../../../../components/dashboard/giveaway/table/Table";
import Title from "../../../../components/dashboard/giveaway/title/Title";
import classes from "./page.module.css";

import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  checkboxClicked,
  getData,
} from "../../../../utils/dashboardTablePagesFunctions";
import { paginationsReducer } from "../../../../utils/paginationsReducer";

const giveawayPrizeIntialValue = {
  title: "",
  description: "",
  startTime: "",
  endTime: "",
  prizeImage: null,
  imageSrc: null,
};
const prizeReducer = (state, action) => {
  console.log("state", state);
  if (action.type === "RESET-ALL") {
    return giveawayPrizeIntialValue;
  }
  if (action.type === "UPDATE-ALL") {
    return action.value;
  }
  if (action.type === "TITLE") {
    return { ...state, title: action.value };
  } else if (action.type === "DESCRIPTION") {
    return { ...state, description: action.value };
  } else if (action.type === "START-TIME") {
    return { ...state, startTime: action.value };
  } else if (action.type === "END-TIME") {
    return { ...state, endTime: action.value };
  } else {
    // coverFile: action.file, coverImage: action.image
    return { ...state, prizeImage: action.file, imageSrc: action.image };
  }
};
const Page = () => {
  const notify = (message, type) => toast[type](message);

  const router = useRouter();
  const pathname = usePathname();
  const [followers, setFollowers] = useState([]);
  const [selectedFollowers, setSelectedFollowers] = useState([]);
  const [deleteAlert, setDeleteAlert] = useState(false);
  const [giveawayPrize, dispatchPrizeDetail] = useReducer(
    prizeReducer,
    giveawayPrizeIntialValue
  );

  const selectElement = (elemID) => {
    checkboxClicked(elemID, selectedFollowers, setSelectedFollowers);
  };

  const saveGiveawayPrize = async () => {
    const formData = new FormData();
    formData.append("title", giveawayPrize?.title);
    formData.append("description", giveawayPrize?.description);
    formData.append("startTime", giveawayPrize?.startTime);
    formData.append("endTime", giveawayPrize?.endTime);
    formData.append("prizeImage", giveawayPrize?.prizeImage);

    try {
      const dataSent = await axios.patch(
        `${process.env.BACKEND_SERVER}/giveaway/event
`,
        formData
        // {
        //   headers: {
        //     Authorization: `Bearer ${Cookies.get("token")}`,
        //   },
        // }
      );
      // dispatchPrizeDetail({ type: "RESET-ALL" });
      notify("item saved successfully.", "success");
      console.log(dataSent);
    } catch (error) {
      notify(error.response?.message, "error");
      console.log("err", error);
    }
    // saveItem(pathname, formData, dispatchPrizeDetail, notify, router, "news");
    // createItem(pathname, router);
  };
  const [paginations, dispatchDetail] = useReducer(paginationsReducer, {
    rowsPerPage: 10,
    currentPage: 1,
    results: 0,
  });
  useEffect(() => {
    const fetchNewData = async () => {
      const query = {
        page: paginations.currentPage,
        limit: paginations.rowsPerPage,
      };
      const newData = await getData("giveaway/folllower", query);
      const response = await getData("giveaway/event");
      let eventData = {
        ...response?.data?.data,
      };
      if (response?.data?.data.prizeImage !== null) {
        eventData.imageSrc = `${process.env.STATIC_SERVER}/img/giveaway/${response.data.data.prizeImage}`;
      } else {
        eventData.imageSrc = null;
      }
      dispatchPrizeDetail({ type: "UPDATE-ALL", value: eventData });
      console.log("eventData", eventData);

      setFollowers(newData?.data?.data);
      dispatchDetail({ type: "RESULTS", value: newData?.results });
    };
    fetchNewData();
  }, [
    paginations.currentPage,
    paginations.rowsPerPage,
    setFollowers,
    dispatchDetail,
  ]);

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

      <h1 className={classes["title"]}>Giveaway Settings </h1>
      <div className={classes["actions"]}>
        <ActionsButtons
          firstButtonFunction={saveGiveawayPrize}
          first={"Save"}
        />
      </div>
      <div className={classes["wrapper"]}>
        <Title
          data={giveawayPrize.title}
          dispatchPrizeDetail={dispatchPrizeDetail}
        />
        <div className={classes["description"]}>
          <Description
            data={giveawayPrize.description}
            dispatchPrizeDetail={dispatchPrizeDetail}
          />
        </div>
        <div className={classes["details"]}>
          <Date
            data={{
              startTime: giveawayPrize.startTime,
              endTime: giveawayPrize.endTime,
            }}
            dispatchPrizeDetail={dispatchPrizeDetail}
          />
          <PrizeImage
            data={giveawayPrize.imageSrc}
            dispatchPrizeDetail={dispatchPrizeDetail}
          />
          <Reset dispatchPrizeDetail={dispatchPrizeDetail} />
        </div>
      </div>

      <div className={classes["table"]}>
        <h2 className={classes["sub-heading"]}>Random Winner Generator</h2>
        <Table
          followers={followers}
          selectElement={selectElement}
          paginations={paginations}
          dispatchDetail={dispatchDetail}
        />
      </div>
      <h2 className={classes["sub-heading"]}>Random Winner Generator</h2>
      <RNG />
    </div>
  );
};

export default Page;
