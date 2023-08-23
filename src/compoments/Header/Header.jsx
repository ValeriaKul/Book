// В файле Header.js
import React, { useState } from "react";
import IconsHeader from "../Icons/IconsHeader";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import OrderBtn from "../OrderBtn/OrderBtn";
import s from "./style.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={s.header}>
      <div className={`${s.navLargeScreen} ${menuOpen ? s.hideOnSmallScreen : ""}`}>
        <Logo />
        <IconsHeader />
        <Nav />
      </div>
      <div className={`${s.navSmallScreen} ${menuOpen ? s.open : ""}`}>
        <button className={s.burgerBtn} onClick={toggleMenu}>
          <div className={`${s.burgerIcon} ${menuOpen ? s.open : ""}`}></div>
        </button>
        {menuOpen && (
          <div className={`${s.mobileMenu}`}>
            <Nav />
            <IconsHeader />
          </div>
        )}
      </div>
      <OrderBtn />
    </div>
  );
}
