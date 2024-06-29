import React from "react";
import {Chart} from "react-google-charts"


export const data = [
    ["Items", "Demand"],
    ["inventary", 400],
    ["Image", 200],
    ["Review", 960],
    ["Items", 1099],
   
  ];
  
  export const options = {
    title: "Daily Activities",
    is3D: true,
  };
  
  export function PieChartBar() {
    return (
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"250px"}
      />
    );
  }
  