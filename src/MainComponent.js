import React from "react";

function MainComponent({ data }) {
  console.log(data);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      style={{
        margin: "5px",
        padding: "10px",
        border: "1px solid rgba(0,0,0,0.1)",
        borderRadius: "10px",
        boxShadow: "2px 4px 4px lightgray",
      }}
    >
      <table className="responsive-table highlight striped centered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Mission Name</th>
            <th>Launch Site</th>
            <th>Rocket Name</th>
            <th>No. of flight</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((_d, index) => (
            <tr key={index + 1}>
              <td>{_d.id}</td>
              <td>{_d.mission_name}</td>
              <td title={_d.launch_site.site_name_long}>
                {truncate(_d.launch_site.site_name_long, 30)}
              </td>
              <td>{_d.rocket.rocket_name}</td>
              <td>{_d.rocket.first_stage.cores[0]?.flight}</td>
              <td>{new Date(_d.launch_date_local).toUTCString()}</td>
            </tr>
          ))}

          {/* <tr>
            <td>Alan</td>
            <td>Jellybean</td>
            <td>$3.76</td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default MainComponent;
