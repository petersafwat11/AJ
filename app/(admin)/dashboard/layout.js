import React from "react";
import Navigation from "../../../components/dashboard/navigation/Navigation";
import SignoutBtn from "../../../components/dashboard/signoutBtn/SignoutBtn";
import classes from "./layout.module.css";
export default function DashboardLayout({ children }) {
  return (
    <section className={classes["layout"]}>
      <Navigation />
      <SignoutBtn />
      {children}
    </section>
  );
}
