import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Players from "./component/Player/Players";
import SideBar from "./component/SideBar/SideBar";

function App() {
  return (
    <div className="App row">
      <div className="col-md-9">
        <Players></Players>
      </div>
      <div className="col-md-3">
        <SideBar></SideBar>
      </div>
    </div>
  );
}

export default App;
