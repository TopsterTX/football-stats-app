import React from "react";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <section className="header__body">
          <div
            className="header__menu"
            id="menu"
            onClick={() => {
              const leagues = document.getElementById("leagues__block");
              const menu = document.getElementById("menu");
              leagues.classList.toggle("active");
              menu.classList.toggle("active");
            }}
          >
            <span></span>
          </div>
          <a href="" className="header__link">
            <h3 className="header__title">FOOTBALL-STATX</h3>
          </a>
        </section>
      </div>
    </header>
  );
};
