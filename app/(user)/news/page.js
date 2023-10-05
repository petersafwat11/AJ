import React from "react";
import Marque from "../../../components/marque/Marque";
import Wrapper from "../../../components/news/wrapper/Wrapper";
import PageTitle from "../../../components/pageTitle/PageTitle";
import TopLayout from "../../../components/topLayout/TopLayout";
import { getData } from "../../../utils/dashboardTablePagesFunctions";
import classes from "./news.module.css";

const Page = async () => {
  const news = await getData("news", {
    page: 1,
    limit: 10,
  });
  return (
    <div className="wrapper">
      <TopLayout />
      <div className="wrapper-2">
        <Marque />

        <main className={classes["news"]}>
          <PageTitle title={"NEWS"} />

          <Wrapper data={news} />
          {/* <div className="center-under-dev">
            <UnderDevelopment />
          </div> */}
        </main>
      </div>
    </div>
  );
};

export default Page;
