import React from "react";
import Plot from "react-plotly.js";

function BarChart({ data }) {
  let missionArr = [];
  let noOfFlight = [];
  let ids = [];
  data?.map((_d, index) => {
    ids.push(_d.id);
  });
  data?.map((_d, index) => {
    missionArr.push(_d.mission_name);
  });
  data?.map((_d, index) => {
    noOfFlight.push(_d.rocket.first_stage.cores[0].flight);
  });
  return (
    <div>
      <Plot
        data={[
          {
            x: ids,
            y: noOfFlight,
            type: "scatter",
            mode: "lines+markers",
            name: "No of Flight",
            marker: { color: "red" },
          },
          {
            type: "bar",
            x: ids,
            y: noOfFlight,
            text: missionArr,
            name: "Mission name",
            marker: {
              color: "#7d2ae8",
            },
          },
        ]}
        layout={{ title: "SpaceX Mission Plot" }}
      />
    </div>
  );
}

export default BarChart;
