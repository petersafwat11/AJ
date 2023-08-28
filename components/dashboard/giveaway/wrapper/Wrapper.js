"use client";
import React from "react";
import classes from "./wrapper.module.css";
import Table from "../table/Table";
const Wrapper = () => {
  return <div className={classes["container"]}>
    <Table
    />
  </div>;
};

export default Wrapper;
