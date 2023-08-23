import React from "react";
import SubTitle from "../SubTitle/SubTitle";
import Dash from "../svg/Dash";
import TextDescription from "../TextDescription/TextDescription";
import img from './qrcode.jpg';
import img_author from './author.jpg';
import s from "./style.module.css";

export default function AboutTheAuthor() {
  const text1 =
    "We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime.";
  return (
    <div className={s.page}>
      <div className={s.photo}>
        <img className={s.image} src={img_author} alt="" />
      </div>
      <div className={s.descr_author}>
        <SubTitle subTitle={"About the Author"} />
        <Dash />
        <TextDescription text={text1} />
        <div className={s.rating_author}>
          <div className={s.rat_books}>
            <SubTitle subTitle={"02"} />
            <TextDescription text={"Books Published"} />
          </div>
          <div className={s.rat_reviews}>
            <SubTitle subTitle={"4.5"} />
            <TextDescription text={"User Reviews"} />
          </div>
          <div className={s.rat_awards}>
            <SubTitle subTitle={"04"} />
            <TextDescription text={"Best Seller Awards"} />
          </div>
        </div>
        <div className={s.contacts}>
          <img className={s.qrcode_img} src={img} alt="qrcode" />
          <div className={s.descr_contacts}>
            <p className={s.authors_name}>John Abraham , Ph.d</p>
            <p className={s.authors_cont}>
              Mail:{" "}
              <a href="mailto:johnabraham@gmail.com">johnabraham@gmail.com</a>{" "}
            </p>
            <p className={s.authors_cont}>
              Phone: <a href="tel:+2 123 545 9000">(+2) 123 545 9000</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
