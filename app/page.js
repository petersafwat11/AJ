import Footer from "../components/footer/Footer";
import NewsLetter from "../components/news-letter/NewsLetter";

import React from "react";
import Wrapper from "../components/home-page/wrapper/Wrapper";
import Marque from "../components/marque/Marque";
import TopLayout from "../components/topLayout/TopLayout";
import { getData } from "../utils/dashboardTablePagesFunctions";
const Page = async () => {
  const currentEvents = await getData("sports", {
    page: 1,
    limit: undefined,
    sportCategory: "football",
  });

  console.log(currentEvents);
  return (
    <div className="wrapper">
      <TopLayout />
      <div className="wrapper-2">
        <Marque />
        <Wrapper data={currentEvents} />
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
