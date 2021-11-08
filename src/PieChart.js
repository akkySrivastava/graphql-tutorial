import React from "react";
import Plot from "react-plotly.js";

function PieChart({ data }) {
  let missionArr = [];
  let noOfFlight = [];
  let ids = [];
  let reuse = [];
  data?.map((_d, index) => {
    ids.push(_d.id);
  });
  data?.map((_d, index) => {
    missionArr.push(_d.mission_name);
  });
  data?.map((_d, index) => {
    noOfFlight.push(_d.rocket.first_stage.cores[0].flight);
  });
  data?.map((_d, index) => {
    reuse.push(_d.rocket.first_stage.cores[0].core.reuse_count);
  });
  var trace1 = {
    x: ids,
    y: missionArr,
    text: missionArr,
    mode: "markers",
    name: "Mission name",
    marker: {
      //   size: [400, 600, 800, 1000],
      sizemode: "area",
    },
  };

  var trace2 = {
    x: ids,
    y: noOfFlight,
    text: missionArr,
    name: "No of flights taken",
    mode: "markers",
    marker: {
      //   size: [400, 600, 800, 1000],
      //setting 'sizeref' to lower than 1 decreases the rendered size
      sizeref: 2,
      sizemode: "area",
    },
  };

  var trace3 = {
    x: ids,
    y: reuse,
    text: missionArr,
    name: "Rockets reused",
    mode: "markers",
    marker: {
      //   size: [400, 600, 800, 1000],
      //setting 'sizeref' to less than 1, increases the rendered marker sizes
      sizeref: 0.2,
      sizemode: "area",
    },
  };

  // sizeref using above forumla

  var _data = [trace1, trace2, trace3];

  var layout = {
    title: "SpaceX mission Bubble Chart",
    showlegend: false,
    height: 600,
    width: 600,
  };
  return (
    <div>
      <Plot data={_data} layout={layout} />
    </div>
  );
}

export default PieChart;
