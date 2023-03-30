import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
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
    <div>
      <div className="players-container">
        {players.map((player) => (
          <SinglePlayer player={player}></SinglePlayer>
        ))}
      </div>
      {/* <div className="cart-container">
        <h2>Rufaida</h2>
      </div> */}
    </div>
  );
};

export default Players;
