"use client";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";

import React, { useCallback, useEffect, useReducer } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ActionsButtons from "../../../../../components/dashboard/actionsButtons/ActionsButtons";
import Description from "../../../../../components/dashboard/createNews/description/Description";
import NewsContent from "../../../../../components/dashboard/createNews/newsContent/NewsContent";
import ThumbnailImage from "../../../../../components/dashboard/createNews/thumbnailImage/ThumbnailImage";
import Title from "../../../../../components/dashboard/createNews/title/Title";
import {
  deleteItem,
  saveItem,
} from "../../../../../utils/dashboardHelperFunctions";
import { getData } from "../../../../../utils/dashboardTablePagesFunctions";
import classes from "./page.module.css";

const intialValue = {
  title: "",
  description: "",
  coverImage: null,
  coverFile: null,
  numOfSubnews: 1,
  subNews: [{ index: 1, title: "", description: "", image: null, file: null }],
};
const newsReducer = (state, action) => {
  // console.log("state", action);
  if (action.type === "CLEAR-ALL") {
    return intialValue;
  }
  if (action.type === "UPDATE-ALL") {
    console.log(action.value, "action.value", action.value.coverImage);

    return action.value;
  }
  if (action.type === "TITLE") {
    return { ...state, title: action.value };
  } else if (action.type === "DESCRIPTION") {
    return { ...state, description: action.value };
  } else if (action.type === "COVER-IMAGE") {
    return { ...state, coverFile: action.file, coverImage: action.image };
  } else if (action.type === "ADD-SUBNEWS") {
    let updatedSubNews = [...state.subNews];
    const addedSubNews = {
      index: action.value,
      title: "",
      description: "",
      image: "",
    };
    updatedSubNews.push(addedSubNews);
    return {
      ...state,
      numOfSubnews: action.value,
      subNews: updatedSubNews,
    };
  } else if (action.type === "remove-SUBNEWS") {
    let updatedSubNews = [...state.subNews];
    updatedSubNews.pop();
    return {
      ...state,
      numOfSubnews: action.value,
      subNews: updatedSubNews,
    };
  } else if (action.type === "SUBNEWS-TITLE") {
    const prevNewsState = [...state.subNews];
    let updatedSubNews = prevNewsState.filter(
      (item) => item.index !== action.index
    );
    let changedSubnews = prevNewsState.find(
      (item) => item.index === action.index
    );
    changedSubnews = { ...changedSubnews, title: action.value };

    updatedSubNews.push(changedSubnews);
    return {
      ...state,
      subNews: updatedSubNews,
    };
  } else if (action.type === "SUBNEWS-DESCRIPTION") {
    const prevNewsState = [...state.subNews];
    let updatedSubNews = prevNewsState.filter(
      (item) => item.index !== action.index
    );
    let changedSubnews = prevNewsState.find(
      (item) => item.index === action.index
    );
    changedSubnews = { ...changedSubnews, description: action.value };

    updatedSubNews.push(changedSubnews);
    return {
      ...state,
      subNews: updatedSubNews,
    };
  } else if (action.type === "SUBNEWS-IMAGE") {
    const prevNewsState = [...state.subNews];
    let updatedSubNews = prevNewsState.filter(
      (item) => item.index !== action.index
    );
    let changedSubnews = prevNewsState.find(
      (item) => item.index === action.index
    );
    changedSubnews = {
      ...changedSubnews,
      file: action.file,
      image: action.image,
    };

    updatedSubNews.push(changedSubnews);
    return {
      ...state,
      subNews: updatedSubNews,
    };
  }
};
const Page = () => {
  const notify = (message, type) => toast[type](message);

  const [news, dispatchDetail] = useReducer(newsReducer, intialValue);
  const pathname = usePathname();
  const router = useRouter();

  const saveChanges = () => {
    let data = news;
    const formData = new FormData();
    formData.append("title", data?.title);
    formData.append("description", data?.description);
    formData.append("coverImage", data?.coverFile);
    formData.append("numOfSubnews", data?.numOfSubnews);

    data?.subNews.forEach((subNew, index) => {
      formData.append(`subNews-${index + 1}-title`, subNew.title);
      formData.append(`subNews-${index + 1}-description`, subNew.description);
      formData.append(`subNews-${index + 1}-image`, subNew.file);
    });
    saveItem(pathname, formData, dispatchDetail, notify, router, "news");
  };
  const deleteNews = async () => {
    deleteItem(pathname, router, "news");
  };
  const getNewsData = useCallback(async () => {
    try {
      const response = await getData(`news/${pathname.split("/")[3]}`);
      let newState = { ...response.data.data };
      delete newState.__v;
      newState.coverImage = `${process.env.STATIC_SERVER}/img/news/${newState.coverImage}`;
      newState.subNews = newState.subNews.map((item) => {
        let newItem = {
          ...item,
          image: `${process.env.STATIC_SERVER}/img/news/${item.image}`,
        };
        return newItem;
      });

      console.log("newState", newState);

      dispatchDetail({ type: "UPDATE-ALL", value: newState });
    } catch (err) {
      console.log("err", err);
    }
  }, [pathname]);

  useEffect(() => {
    !pathname.endsWith("create") ? getNewsData() : "";
  }, [pathname, getNewsData]);

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

      <h1 className={classes["title"]}>Create News</h1>
      <div className={classes["actions"]}>
        <ActionsButtons
          firstButtonFunction={saveChanges}
          secondButtonFunction={deleteNews}
          first={"Save"}
          second={"Delete"}
        />
      </div>
      <p className={classes["label"]}>Listing ID: 2</p>

      <div className={classes["details"]}>
        <div className={classes["first"]}>
          <Title data={news.title} dispatchDetail={dispatchDetail} />
          <ThumbnailImage
            data={{ image: news.coverImage, file: news.coverFile }}
            dispatchDetail={dispatchDetail}
          />
        </div>
        <Description data={news.description} dispatchDetail={dispatchDetail} />
      </div>
      <NewsContent
        data={{
          title: news.title,
          subNews: news.subNews,
          numOfSubnews: news.numOfSubnews,
        }}
        dispatchDetail={dispatchDetail}
      />
    </div>
  );
};

export default Page;
