import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Up.css";
import type { JSX } from "react";

export default function Up(): JSX.Element {
  const [nick, setNick] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // replace with real submit logic
    console.log("signup:", { nick, email, password });
    // example redirect after signup:
    // window.location.href = "/auth";
    navigate("/logIn")
  };

  return (
    <div className="lp-page lp-page--form">
      <div className="lp-container">
        <div className="lp-title">logUp</div>

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
            <span className="field-label">Emale</span>
            <input
              className="field-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
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

          <button type="submit" className="lp-btn lp-btn--green lp-btn--wide" aria-label="logUp">
            logUp
          </button>
        </form>
      </div>

      <a href="/about" className="lp-about" aria-label="About link">About</a>
    </div>
  );
}