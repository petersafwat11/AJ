import React from "react";
import Navigation from "../../../components/dashboard/navigation/Navigation";
import classes from './layout.module.css'
export default function DashboardLayout({
  children
}) {
  return (
    <section>
      <Navigation />
      <button className={classes["sign-out"]}>Sign Out</button>
      {children}
    </section>
  );
}
