// App.js
import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <div className="logo">Daud Jaan<span className="dot">.</span></div>
        <nav className="nav">
          <a href="#about">About me</a>
          <a href="#services">Services</a>
          <a href="#work">My Work</a>
          <a href="#contact">Contact me</a>
        </nav>
        <div className="header-actions">
          <span className="theme-toggle">🌙</span>
          <button className="contact-btn">Contact ↗</button>
        </div>
      </header>

      <main className="hero">
        <img
        className="profile-pic"
        src="/images/daud.jpg"
        alt="Daud Abdi"
         />  
        <h2>Hi! I'm Daud 👋</h2>
        <h1>
          frontend web developer <br /> based in London.
        </h1>
        <p>
          I am a junior frontend developer from Somalia, with experience in AI projects,
          and embedding javascript in tensorflow on browser.
        </p>
        <div className="cta-buttons">
          <button className="contact">contact me →</button>
          <button className="resume">my resume ⬇</button>
        </div>
      </main>
    </div>
  );
}