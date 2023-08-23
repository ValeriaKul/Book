import React from "react";
import TextDescription from "../TextDescription/TextDescription";
import s from "./style.module.css";

export default function ResourceItem({ img, title, descr, date }) {
  return (
    <div className={s.res_itm}>
      <img className={s.res_itm_img} src={img} alt={title} />
      <p className={s.res_itm_title}>{title}</p>
      <div className={s.res_itm_descr}>
        <TextDescription text={descr} />
      </div>
      <p className={s.res_itm_data}>{date}</p>
    </div>
  );
}
