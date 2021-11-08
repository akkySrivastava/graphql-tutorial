import "./App.css";
import MainComponent from "./MainComponent";
import { useQuery, gql } from "@apollo/client";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import { useState } from "react";

function App() {
  const [limit, setLimit] = useState(7);
  const QUERY = gql`
    {
      launchesPast(limit: ${limit ? limit : 5}) {
        id
        mission_name
        launch_date_local
        launch_site {
          site_name_long
        }
        rocket {
          rocket_name
          first_stage {
            cores {
              flight
              core {
                reuse_count
                status
              }
            }
          }
        }
        ships {
          name
          home_port
          image
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(QUERY);
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>;

  console.log(data);

  return (
    <div className="App">
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
                placeholder="Enter no. of data limit"
                id="first_name"
                min={1}
                max={30}
                type="number"
                class="validate"
              />
            </div>
          </div>
        </form>
      </div>
      <MainComponent data={data.launchesPast} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
        className="charts"
      >
        <BarChart data={data.launchesPast} />
        <PieChart data={data.launchesPast} />
      </div>
    </div>
  );
}

export default App;
