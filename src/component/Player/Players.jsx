import React, { useEffect, useState } from "react";
import SinglePlayer from "../SinglePlayer/SinglePlayer";
import "./Players.css";

const Players = () => {
  <h2>Select Your Best Eleven. Best Of Luck!</h2>;
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/hnmahamud/players_api/main/players.json?fbclid=IwAR2MkHMJUCBiyU2pCRqqIVF7ePCAtXUpXai8TY4i7Ns-Ye2swYfSVXJxNzM"
    )
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div className="all-player">
      {players.map((player) => (
        <SinglePlayer player={player}></SinglePlayer>
      ))}
    </div>
  );
};

export default Players;
