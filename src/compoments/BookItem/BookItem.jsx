import React from "react";
import Circle from "../svg/Circle";
import TextDescription from "../TextDescription/TextDescription";
import s from "./style.module.css";

export default function BookItem({ title, price, image, description }) {
  return (
    <div className={s.item}>
      <img className={s.book_img} src={image} alt={title} />
      <div className={s.descr_total}>
        <p className={s.title}>{title}</p>
        <p className={s.price}>$ {price}</p>
        <TextDescription text={description} />
        <div className={s.status}>
          <Circle />
          <span>Printed Book</span>
        </div>
      </div>
    </div>
  );
}
