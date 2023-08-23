import React from "react";
import Book from "../svg/Book";
import Pages from "../svg/Pages";
import s from "./style.module.css";

export default function Logo() {
  return (
    <div className={s.logo}>
      <Book />
      <Pages />
    </div>
  );
}
