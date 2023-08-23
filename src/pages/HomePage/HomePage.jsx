import React from "react";
import AboutBook from "../../compoments/AboutBook/AboutBook";
import OrderBtn from "../../compoments/OrderBtn/OrderBtn";
import Dash from "../../compoments/svg/Dash";
import TextDescription from "../../compoments/TextDescription/TextDescription";
import s from "./style.module.css";
import img_2 from './bookCore.jpg';

export default function HomePage() {
  const text1 =
    "We believe that reading books are essential to healthy culture.";
  const text2 = "They're where authors can connect with readers.";
  return (
    <div className={s.homepage}>
      <div className={s.greeting}>
        <div className={s.part1}>
          <span className={s.part1_homepage_dash}>
            <Dash />
          </span>
          <span>Welcome To Pages!!!</span>
        </div>
        <div className={s.part2}>
          <p>
            Your Books From <br /> The Best Writter.
          </p>
        </div>
        <div className={s.part3}>
          <TextDescription text={text1} />
          <TextDescription text={text2} />
        </div>
        <div className={s.btn}>
          <OrderBtn />
          <a href="http://">Read Free Demo</a>
        </div>
        <div className={s.aboutBook}>
          <AboutBook />
        </div>
      </div>
      <div className={s.book_cover}>
        <img
          className={s.book_cover__img}
          src={img_2}
          alt="book"
        />
      </div>
    </div>
  );
}
