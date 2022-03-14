import React from "react";
import "./App.scss";
import Menu from "./Components/Menu/Menu";
import MidlePages from "./Components/MidlePages/MidlePages";
import RightSitebar from "./Components/RightSitebar/RightSitebar";

function App() {
  return (
    <div className="App container">
      <div className="row">
        <Menu />
        <MidlePages />
        <RightSitebar />
      </div>
    </div>
  );
}

export default App;
