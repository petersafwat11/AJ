import React from "react";
import ChannelsWrapper from "../../../components/channels/wrapper/Wrapper";
import Marque from "../../../components/marque/Marque";
import TopLayout from "../../../components/topLayout/TopLayout";
import { getData } from "../../../utils/dashboardTablePagesFunctions";
import classes from "./channels.module.css";
const Page = async () => {
  const channelsServer = await getData("channels", {
    page: 1,
    limit: undefined,
  });
  console.log(channelsServer.data.data);
  return (
    <div className={classes["wrapper"]}>
      <TopLayout />
      <div className={classes["wrapper-2"]}>
        <Marque />
        <ChannelsWrapper channelsServer={channelsServer.data.data} />
      </div>
    </div>
  );
};

export default Page;
