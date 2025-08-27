import React from "react";
import { Routes, Route } from "react-router-dom";
import type { JSX } from "react";
import "./App.css";

function Home(): JSX.Element {
  return (
    <div className="lp-page">
      <div className="lp-container">
        <div className="lp-title">testCRUDapp</div>
        <div className="lp-panel">
          <button className="lp-btn lp-btn--green" aria-label="logIn">logIn</button>
          <button className="lp-btn lp-btn--white" aria-label="logup">logup</button>
          <button className="lp-btn lp-btn--red" aria-label="Apanel">Apanel</button>
        </div>
      </div>
    </div>
  );
}

function App():JSX.Element {

  return(
    <div>
      <Home></Home>
    </div>
  )
}

export default App
