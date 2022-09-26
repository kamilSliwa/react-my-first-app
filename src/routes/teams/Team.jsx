import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DataLoading from "../../ui/DataLoading";
import Games from "../Games";

const axios = require("axios").default;

export default function Team(props) {
  let params = useParams();

  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.squiggle.com.au/?q=teams;team=" + params.teamId)
      .then((resp) => {
        let [dest] = resp.data.teams;
        setTeam(dest);
      })
      .catch((err) => {
        // Handle Error Here
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params]);

  if (loading) {
    return <DataLoading />;
  }

  return (
    <div>
      <div className='teamDetails'>
        <img
          alt={team.name}
          src={process.env.PUBLIC_URL + "/assets/" + team.id + ".png"}
        />
        <div className='teamInfo'>
          <h1>{team.name}</h1>
          <h1>{team.debut}</h1>
        </div>
      </div>
      <Games games={team.id} />
    </div>
  );
}
