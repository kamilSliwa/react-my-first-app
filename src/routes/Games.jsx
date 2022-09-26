import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

export default function Games(props) {
  const [game, setGame] = useState([]);
  const [loading, setLoading] = useState(false);
  const [seasons, setSeasons] = useState("2020");

  const options = [
    { value: "2017", label: "2017 " },
    { value: "2018 ", label: "2018" },
    { value: "2019", label: "2019" },
  ];

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://api.squiggle.com.au/?q=games;year=" +
          seasons +
          ";team=" +
          props.games
      )
      .then((resp) => {
        setGame(resp.data.games);
      })
      .catch((err) => {
        // Handle Error Here
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [seasons]);

  const seasonsHandler = (e) => {
    setSeasons(e.value);
  };

  return (
    <div>
      <Select
        options={options}
        defaultValue={{ value: "2020", label: "2020" }}
        onChange={seasonsHandler}
      />{" "}
      {game.map((game) => (
        <li key={game.id}>
          {
            <div className='gamesContainer'>
              <div className='round'>Runda {game.round}</div>
              <div className='hTeam'>
                <img
                  alt={game.hteam}
                  src={
                    process.env.PUBLIC_URL + "/assets/" + game.hteamid + ".png"
                  }></img>
                {game.hteam}
              </div>
              <div className='score'>
                {game.hscore} -{game.ascore}
              </div>
              <div className='aTeam'>
                {game.ateam}{" "}
                <img
                  alt={game.ateam}
                  src={
                    process.env.PUBLIC_URL + "/assets/" + game.ateamid + ".png"
                  }></img>
              </div>
            </div>
          }
        </li>
      ))}
    </div>
  );
}
