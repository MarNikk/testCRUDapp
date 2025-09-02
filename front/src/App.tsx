import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import type { JSX } from "react";
import "./App.css";

import Up from "./components/Up/Up";

function Home(): JSX.Element {
  const navigate = useNavigate();

  return (
    <>
      <div className="lp-container">
        <div className="lp-title">testCRUDapp</div>
        <div className="lp-panel">
          <button className="lp-btn lp-btn--green" aria-label="logIn" onClick={() =>navigate("/logIn")}>logIn</button>
          <button className="lp-btn lp-btn--white" aria-label="logUp" onClick={() =>navigate("/logUp")}>logUp</button>
          <button className="lp-btn lp-btn--red" aria-label="Apanel" onClick={() =>navigate("/Apanel")}>Apanel</button>
        </div>
      </div>
    </>
  );
};
function About():JSX.Element{
  return(
    <div>
      About
    </div>
  );
};
function Apanel():JSX.Element{
  return(
    <div>
      Apanel
    </div>
  );
};
function In():JSX.Element{
  return(
    <div>
      logUp
    </div>
  );
};

function App():JSX.Element {

  return(
    <div className="lp-page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Apanel" element={<Apanel />} />
        <Route path="/logIn" element={<In />} />
        <Route path="/logUp" element={<Up />} />
      </Routes>

      <a href="/about" className="lp-about" aria-label="About link">About</a>
    </div>
  );
};

export default App
