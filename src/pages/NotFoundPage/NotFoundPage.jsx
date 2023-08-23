import React from "react";
import s from "./style.module.css";
import img from './error.png';

export default function NotFoundPage() {
  return (
    <div className={s.error}>
      <img className={s.error} src={img} alt="error" />
    </div>
  );
}
