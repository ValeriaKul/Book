import React from "react";
import Ellipsis from "../Ellipsis/Ellipsis";
import IconsFooter from "../Icons/IconsFooter";
import Logo from "../Logo/Logo";
import s from "./style.module.css";

export default function Footer() {
  const explore = [
    { id: 1, label: "Home", to: "/" },
    { id: 2, label: "About", to: "/companies" },
    { id: 3, label: "Articles", to: "/articles" },
    { id: 4, label: "Our Store", to: "/123" },
    { id: 5, label: "Contact Us", to: "/124" },
  ];

  const utility_pages = [
    { id: 1, label: "Style Guide", to: "/125" },
    { id: 2, label: "Password Protected", to: "/126" },
    { id: 3, label: "Licenses", to: "/127" },
    { id: 4, label: "Changelog", to: "/128" },
  ];

  return (
    <div className={s.footer}>
      <div className={s.icons}>
        <span className={s.footer_logo}>
          <Logo />
        </span>
        <IconsFooter />
      </div>
      <div className={s.explore}>
        <p className={s.title}>Explore</p>
        {explore.map(({ id, label }) => (
          <div key={id} className={s.explore_link}>
            <Ellipsis key={id + 10} />
            <p key={id + 20}>{label}</p>
          </div>
        ))}
      </div>
      <div className={s.explore}>
        <p className={s.title}>Utility Pages</p>
        {utility_pages.map(({ id, label }) => (
          <div key={id} className={s.explore_link}>
            <Ellipsis key={id + 30} />
            <p key={id + 50}>{label}</p>
          </div>
        ))}
      </div>
      <div className={s.address}>
        <p className={s.title}>Keep in Touch</p>
        <div className={s.line}>
          <div className={s.name}>
            <p className={s.title_min}>Address:</p>
          </div>
          <div>
            <p className={s.description}>
              24A Kingston St, Los Vegas <br /> NC 28202, USA.
            </p>
          </div>
        </div>
        <div className={s.line}>
          <div className={s.name}>
            <p className={s.title_min}>Mail:</p>
          </div>
          <div>
            <p className={s.description}>support@pages.com</p>
          </div>
        </div>
        <div className={s.line}>
          <div className={s.name}>
            <p className={s.title_min}>Phone:</p>
          </div>
          <div>
            <p className={s.description}>(+22) 123 - 4567 - 900</p>
          </div>
        </div>
      </div>
    </div>
  );
}
