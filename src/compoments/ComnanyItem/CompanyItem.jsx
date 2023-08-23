import React from "react";
import TextDescription from "../TextDescription/TextDescription";
import s from "./style.module.css";

export default function CompanyItem({ img, title, descr }) {
  return (
    <div className={s.container}>
      <img className={s.img_company} src={img} alt={title} />
      <p className={s.title}>{title}</p>
      <TextDescription text={descr} />
    </div>
  );
}
