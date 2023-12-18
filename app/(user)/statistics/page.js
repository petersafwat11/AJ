import React from "react";
import Marque from "../../../components/marque/Marque";
import Wrapper from "../../../components/statistics/wrapper/Wrapper";
import TopLayout from "../../../components/topLayout/TopLayout";
const Statistics = async () => {
  return (
    <div className="wrapper">
      <TopLayout />
      <div className="wrapper-2">
        <Marque />
        <Wrapper />
      </div>
    </div>
  );
};

export default Statistics;
