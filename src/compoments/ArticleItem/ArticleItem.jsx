import React from "react";
import s from "./style.module.css";

export default function ArticleItem({ id, descr }) {
  return (
    <div className={s.article_item}>
      <div className={s.article_circle}>
        <p className={s.article_item_num}>{id}</p>
      </div>
      <p className={s.article_item_descr}>{descr}</p>
    </div>
  );
}
