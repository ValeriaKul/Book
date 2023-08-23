import React from "react";
import BookItem from "../BookItem/BookItem";
import Dash from "../svg/Dash";
import s from "./style.module.css";
import img_1 from './book1.jpg';
import img_2 from './bookCore.jpg';

export default function TheAuthorsBook() {
  const books = [
    {
      id: 1,
      image: img_1,
      title: "Atomic One's",
      price: "13.84 USD",
      description:
        "As the book contains theoretical content as well as solved questions.",
    },
    {
      id: 2,
      image: img_2,
      title: "The Dark Light",
      price: "86.11 USD",
      description:
        "As the book contains theoretical content as well as solved questions.",
    },
  ];

  return (
    <div className={s.page}>
      <p className={s.article}>The Author's Book</p>
      <span className={s.dash}>
        <Dash />
      </span>
      <div className={s.books}>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
}
