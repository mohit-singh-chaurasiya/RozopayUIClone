import { colors } from "@mui/material";
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    { type: "date", label: "Day" },
    "Daily   ",
    "hours  ",
  ],
  [new Date(2023, 0), -0.5, 7.7],
  [new Date(2023, 1), 4.4, 10.7],
  [new Date(2023, 2), 6.5, 13],
  [new Date(2023, 3), 8.9, 14.3],
  [new Date(2023, 4), 8.3, 13.6],
  [new Date(2023, 5), 6, 13.9],
  [new Date(2023, 6), 7.6, 12.8],
  [new Date(2023, 7), 5.3, 12.6],
  [new Date(2023, 8), 7.4, 13.3],
  [new Date(2023, 9), 4.4, 15.9],
  [new Date(2023, 10), 1.1, 16.6],
  [new Date(2023, 11), -0.2, 15.5],
];

export const options = {
  chart: {
    title: "Active Users",
  },
  width: 500,
  height: 400,
  
  series: {
    // Gives each series an axis name that matches the Y-axis below.
    0: { axis: "Day" },
    1: { axis: "Month" },
  },
  axes: {
    // Adds labels to each axis; they don't have to match the axis names.
    y: {
      Temps: { label: "Temps (Celsius)" },
      Daylight: { label: "Daylight" },
    },
  },
};

export default function Axis2() {
  return (
    <Chart
      chartType="Line"
      width="100%"
      height="400px"
      data={data}
      options={options}
    
    />
  );
}
