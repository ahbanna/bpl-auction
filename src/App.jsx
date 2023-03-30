import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Players from "./component/Player/Players";
import SIdeBar from "./component/SideBar/SIdeBar";

function App() {
  return (
    <div className="App">
      <Players></Players>
      <SIdeBar></SIdeBar>
    </div>
  );
}

export default App;
