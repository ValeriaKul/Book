import React from 'react';
import s from './style.module.css';

export default function SubTitle({subTitle}) {
  return (
    <p className={s.subTitle}>{subTitle}</p>
  )
}
