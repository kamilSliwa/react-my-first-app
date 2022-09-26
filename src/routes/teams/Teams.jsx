import React, { useEffect, useState } from "react";
import DataLoading from "../../ui/DataLoading";
import { NavLink, Outlet } from "react-router-dom";
import Team from "./Team";
import Menu from "../../components/menu/Menu";

const axios = require("axios").default;

export default function Teams(props) {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.squiggle.com.au/?q=teams")
      .then((resp) => {
        setTeams(resp.data.teams);
      })
      .catch((err) => {
        // Handle Error Here
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <DataLoading />;
  }

  return (
    <div className='navTeams'>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            <NavLink
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? "solid" : "",
                  paddingBottom: isActive ? "10px" : "0px",
                };
              }}
              to={`/${team.id}`}>
              <img
                className='menuList'
                alt={team.name}
                src={process.env.PUBLIC_URL + "/assets/" + team.id + ".png"}
              />
            </NavLink>
          </li>
        ))}
      </ul>
      <Menu />
      <Outlet />
    </div>
  );
}
