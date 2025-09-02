import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./In.css";
import type { JSX } from "react";

export default function In(): JSX.Element {
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // replace with real submit logic
    console.log("signup:", { nick, password });
    // example redirect after signup:
    // window.location.href = "/auth";
    navigate("/logIn")
  };

  return (
    <div className="lp-page lp-page--form">
      <div className="lp-container">
        <div className="lp-title">logIn</div>

        <form className="signup-panel" onSubmit={handleSubmit} noValidate>
          <label className="field">
            <span className="field-label">Nikname</span>
            <input
              className="field-input"
              type="text"
              value={nick}
              onChange={(e) => setNick(e.target.value)}
              required
              autoComplete="nickname"
            />
          </label>

          <label className="field">
            <span className="field-label">Password</span>
            <input
              className="field-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
          </label>

          <a href="/About" className="forgot-link">Forgot the password?</a>

          <button type="submit" className="lp-btn lp-btn--green lp-btn--wide" aria-label="logUp">
            logIn
          </button>
        </form>
      </div>
    </div>
  );
}