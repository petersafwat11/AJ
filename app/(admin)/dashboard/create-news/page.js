import React from "react";
import ActionsButtons from "../../../../components/dashboard/actionsButtons/ActionsButtons";
import Description from "../../../../components/dashboard/createNews/description/Description";
import ThumbnailImage from "../../../../components/dashboard/createNews/thumbnailImage/ThumbnailImage";
import Title from "../../../../components/dashboard/createNews/title/Title";
import classes from "./page.module.css";
const page = () => {
  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Create News</h1>
      <div className={classes["actions"]}>
        <ActionsButtons second={"Delete"} />
      </div>
      <p className={classes["label"]}>Listing ID: 2</p>
      <div className={classes["details"]}>
        <div className={classes["first"]}>
          <Title />
          <ThumbnailImage />
        </div>
        <Description />
      </div>
    </div>
  );
};

export default page;
