"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useReducer, useState } from "react";

import { getData } from "../../../../utils/dashboardTablePagesFunctions";
import { paginationsReducer } from "../../../../utils/paginationsReducer";
import Table from "../table/Table";
import classes from "./wrapper.module.css";
const Wrapper = ({ dataFetched }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [reportedLinks, setReportedLinks] = useState(
    dataFetched?.data?.data || []
  );

  const [paginations, dispatchDetail] = useReducer(paginationsReducer, {
    rowsPerPage: 10,
    currentPage: 1,
    results: dataFetched?.results,
  });
  useEffect(() => {
    const fetchNewData = async () => {
      const query = {
        page: paginations.currentPage,
        limit: paginations.rowsPerPage,
      };
      const newData = await getData("reportedLinks", query);
      setReportedLinks(newData.data.data);
      dispatchDetail({ type: "RESULTS", value: newData.results });
    };
    fetchNewData();
  }, [
    paginations.currentPage,
    paginations.rowsPerPage,
    setReportedLinks,
    dispatchDetail,
  ]);

  return (
    <div className={classes["container"]}>
      <Table
        reportedLinks={reportedLinks}
        paginations={paginations}
        dispatchDetail={dispatchDetail}
      />
    </div>
  );
};

export default Wrapper;
