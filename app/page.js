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
    limit: 20,
    sportCategory: "football",
    sort: { eventDate: 1 },
  });
  console.log("currentEvents", currentEvents.data.data);
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
