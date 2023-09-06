import Footer from "../components/footer/Footer";
import NewsLetter from "../components/news-letter/NewsLetter";

import React from "react";
import Wrapper from "../components/home-page/wrapper/Wrapper";
import Marque from "../components/marque/Marque";
import TopLayout from "../components/topLayout/TopLayout";
import { getData } from "../utils/dashboardTablePagesFunctions";
const Page = async () => {
  const currentEvents = await getData("sports/currentEvents", {
    page: 1,
    limit: undefined,
    sportCategory: "football",
  });
  console.log(currentEvents);
  const hotMatches = currentEvents?.data.filter(
    (item) => item.flagged === true
  );

  const otherMatches = {
    total: currentEvents?.totalOtherMatches,
    matches: currentEvents?.data.filter((item) => item.flagged === false),
  };

  return (
    <div className="wrapper">
      <TopLayout />
      <div className="wrapper-2">
        <Marque />
        <Wrapper hot={hotMatches} other={otherMatches} />
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
