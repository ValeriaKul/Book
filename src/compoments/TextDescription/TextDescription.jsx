import React from "react";
import s from "./style.module.css";

export default function TextDescription({text}) {
  return <p className={s.text_descr}>{text}</p>;
}
