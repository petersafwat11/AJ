"use client";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";

import React, { useEffect, useReducer } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ActionsButtons from "../../../../../components/dashboard/actionsButtons/ActionsButtons";
import Description from "../../../../../components/dashboard/createNews/description/Description";
import NewsContent from "../../../../../components/dashboard/createNews/newsContent/NewsContent";
import ThumbnailImage from "../../../../../components/dashboard/createNews/thumbnailImage/ThumbnailImage";
import Title from "../../../../../components/dashboard/createNews/title/Title";
import {
  deleteItem,
  getData,
  saveItem
} from "../../../../../utils/dashboardHelperFunctions";
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
  console.log("state", state);
  if (action.type === "CLEAR-ALL") {
    return intialValue;
  }
  if (action.type === "UPDATE-ALL") {
    console.log(action.value, "action.value");
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(news).forEach((key) => {
        if (key === "subNews") {
          formData.append(key, JSON.stringify(news[key]));
        } else if (key === "coverFile") {
          formData.append(key, news[key]);
        } else {
          formData.append(key, news[key]);
        }
      });
      news.subNews.forEach((subnews, index) => {
        formData.append(`file`, subnews.file);
      });
      const response = await axios.post("/api/news", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const saveChanges = () => {
    let data = news;
    data.coverImage = data.coverFile;

    const formData = new FormData();
    formData.append("title", data?.title);
    formData.append("description", data?.description);
    formData.append("coverImage", data?.coverImage);
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
  useEffect(() => {
    !pathname.endsWith("create")
      ? getData(pathname.split("/")[3], dispatchDetail, "news")
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
