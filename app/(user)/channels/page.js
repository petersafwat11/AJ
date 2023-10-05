import React from "react";
import ChannelsWrapper from "../../../components/channels/wrapper/Wrapper";
import Marque from "../../../components/marque/Marque";
import TopLayout from "../../../components/topLayout/TopLayout";
import { getData } from "../../../utils/dashboardTablePagesFunctions";
const Page = async () => {
  const response = await getData("channels", {
    page: 1,
    limit: 8,
    mode: "Visible",
  });
  // delete channelsServer.status;
  return (
    <div className="wrapper">
      <TopLayout />
      <div className="wrapper-2">
        <Marque />
        <ChannelsWrapper
          channelsServer={{
            channels: response?.data?.data,
            totalResults: response?.results,
          }}
          langs={response?.allLanguages}
        />
      </div>
    </div>
  );
};

export default Page;
