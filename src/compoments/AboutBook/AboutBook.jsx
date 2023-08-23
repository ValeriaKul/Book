import React from "react";
import Circle from "../svg/Circle";
import s from "./style.module.css";

export default function AboutBook() {
  const descr = [
    { id: 1, title: "Pages:", data: "250 pages" },
    { id: 2, title: "Length:", data: "10 Hours" },
    { id: 3, title: "Rating:", data: "4.5/5 (305 ratings)" },
  ];
  return (
    <div className={s.about_book}>
      {descr.map(({ id, title, data }) => (
        <div key={id}>
          <Circle />
          <span className={s.book_caracter}>{title}</span>
          <p className={s.book_descr}>{data}</p>
        </div>
      ))}
    </div>
  );
}
