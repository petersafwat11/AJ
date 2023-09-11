import React from "react";
import ChannelsWrapper from "../../../components/channels/wrapper/Wrapper";
import Marque from "../../../components/marque/Marque";
import TopLayout from "../../../components/topLayout/TopLayout";
import { getData } from "../../../utils/dashboardTablePagesFunctions";
const Page = async () => {
  const channelsServer = await getData("channels", {
    page: 1,
    limit: undefined,
  });
  // delete channelsServer.status;
  console.log({
    channels: channelsServer.data.data,
    totalResults: channelsServer.results,
  });
  return (
    <div className="wrapper">
      <TopLayout />
      <div className="wrapper-2">
        <Marque />
        <ChannelsWrapper
          channelsServer={{
            channels: channelsServer.data.data,
            totalResults: channelsServer.results,
          }}
        />
      </div>
    </div>
  );
};

export default Page;
