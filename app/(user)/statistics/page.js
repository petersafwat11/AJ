import React from "react";
import Marque from "../../../components/marque/Marque";
import TopLayout from "../../../components/topLayout/TopLayout";
import UnderDevelopment from "../../../components/underDevelopment/page/UnderDevelopment";

const Statistics = () => {
  return (
    <div className="wrapper">
      <TopLayout />
      <div className="wrapper-2">
        <Marque />

        {/* <div className={classes["statistics"]}>
          <LeagueMenu />
          <Header />
        </div> */}
        <div className="center-under-dev">
          <UnderDevelopment />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
