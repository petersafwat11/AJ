import React from "react";
import ContactTable from "../../../../components/dashboard/newsLetter/contactTable/Table";
import Table from "../../../../components/dashboard/newsLetter/dataEntryTable/Table";
import classes from "./page.module.css";
const page = () => {
  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Newsletter </h1>
      <h2 className={classes["subheading"]}>Entry Data</h2>
      <Table />

      <h2 className={classes["subheading"]}>Contact</h2>
      <ContactTable />
    </div>
  );
};

export default page;
