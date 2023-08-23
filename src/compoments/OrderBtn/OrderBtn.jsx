import React, { useState } from "react";
import s from "./style.module.css";
import Modal from "../Modal/Modal";
import Dash from "../svg/Dash";
import { toast } from "react-toastify";

export default function OrderBtn() {
  const [modalActive, setModalActive] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const onClick = () => {
    if (!nameInput || !emailInput) {
      toast.error("Please fill in all fields");
    } else {
      setModalActive(false);
      toast.success("Thank you for your order! We will message you by email!");
    }
  };

  return (
    <div className={s.btn_container}>
      <button className={s.btn_text} onClick={() => setModalActive(true)}>
        Order Today
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className={s.modal__frame}>
          <p className={s.modal__order_details}>Order details</p>
          <Dash />
          <form className={s.modal__form}>
            <input
              type="text"
              placeholder=" Enter your name:"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              className={!nameInput ? s.invalid_input : ""}
            />
            <input
              type="email"
              placeholder=" Enter your mail:"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className={!emailInput ? s.invalid_input : ""}
            />
          </form>
          <div className={s.btn_container}>
            <button className={s.btn_text} onClick={onClick}>
              Order
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
