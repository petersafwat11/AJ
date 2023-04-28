"use client";
import * as d3 from "d3";
import React, { useRef } from "react";
import classes from "./areaChart.module.css";
const AreaChart = () => {
  // const containerRef = useRef(null);
  // const container = containerRef.current;

  // const width = 200;
  // const height = 200;
  // const radius = Math.min(width, height) / 2;
  // const data = [
  //   { value: 30, color: "#FF6384" },
  //   { value: 20, color: "#36A2EB" },
  //   { value: 50, color: "#FFCE56" },
  // ];
  // const svg = d3
  //   .select(container)
  //   .append("svg")
  //   .attr("width", width)
  //   .attr("height", height);
  // const pie = d3
  //   .pie()
  //   .value((d) => d.value)
  //   .sort(null);
  // const arc = d3.arc().outerRadius(radius).innerRadius(0);
  // const g = svg
  //   .append("g")
  //   .attr("transform", `translate(${width / 2}, ${height / 2})`);
  // const slices = g
  //   .selectAll("path")
  //   .data(pie(data))
  //   .enter()
  //   .append("path")
  //   .attr("d", arc)
  //   .attr("fill", (d) => d.data.color);
  // slices.each(function (d) {
  //   const slice = d3.select(this);
  //   const totalLength = slice.node().getTotalLength();
  //   const partialLength = totalLength * (d.data.value / 100);
  //   const strokeDasharray = `${partialLength} ${totalLength}`;
  //   const strokeDashoffset = totalLength - partialLength;
  //   slice
  //     .attr("stroke", "black")
  //     .attr("stroke-width", 2)
  //     .attr("stroke-dasharray", strokeDasharray)
  //     .attr("stroke-dashoffset", strokeDashoffset);
  // });

  return (
    <div className={classes["container"]}>
      <svg viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="yellow"
          stroke="black"
          stroke-width="5"
          stroke-dasharray="125.65 125.65"
          stroke-dashoffset="0"
        ></circle>
        {/* <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="red"
          stroke-width="10"
          stroke-dasharray="0 251.3"
          stroke-dashoffset="125.65"
        ></circle> */}
      </svg>
    </div>
  );
};

export default AreaChart;
