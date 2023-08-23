import React from "react";
import CompanyItem from "../../compoments/ComnanyItem/CompanyItem";
import SubTitle from "../../compoments/SubTitle/SubTitle";
import Dash from "../../compoments/svg/Dash";
import TextDescription from "../../compoments/TextDescription/TextDescription";
import s from "./style.module.css";
import img_comp1 from './Amazen.jpg';
import img_comp2 from './Megan.jpg';
import img_comp3 from './MeganK.jpg';
import img_comp4 from './Urban.jpg';
import img_book from './book.png';


export default function CompaniesPage() {
  const companies = [
    {
      id: 1,
      title: "Amazen Corp.",
      descr:
        "They has been helping readers, music lovers, and videophiles find quality material.",
      img: img_comp1,
    },
    {
      id: 2,
      title: "Megan Books",
      descr:
        "We help physical bookstores manage their overstock to the book inventory.",
      img: img_comp2,
    },
    {
      id: 3,
      title: "Megank.",
      descr:
        "Bookstore serving up the full spectrum of Black literature and wine black books.",
      img: img_comp3
    },
    {
      id: 4,
      title: "Urban Store",
      descr:
        "We also carry the latest records, issues of all of your favorite comic books.",
      img: img_comp4
    },
  ];

  const text =
    "We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers.";

  return (
    <div className={s.page_company}>
        <SubTitle subTitle={"Trusted By The Best"} color={"blue"} />
        <Dash />
        <div className={s.companies_container}>
          {companies.map((item) => (
            <CompanyItem key={item.id} {...item} />
          ))}
        </div>
      <div className={s.part2_company}>
        <div className={s.part2_descr}>
          <p className={s.part2_descr_title}>Get Book Copy Today!</p>
          <span className={s.part_2_descr_dash}>
            <Dash />
          </span>
          <TextDescription text={text} />
        </div>
        <div className={s.part2_image}>
          <img
            className={s.part2_image_book}
            src={img_book}
            alt="book"
          />
        </div>
      </div>
    </div>
  );
}
