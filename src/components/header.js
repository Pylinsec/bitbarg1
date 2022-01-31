import "./header.css";
import { Routes, Route, Link } from "react-router-dom";
import menu from "./../assets/svg/menu.svg";
import { useState } from "react";
import Modal from "./modal/modal";
function Header1() {
  const [openModal, setOpenModal] = useState(false);
  const [change, setcChange] = useState(false);
  return (
    <div className="main_navbar">
      <div className="service_dialog"></div>
      <div className="main-navbar_container">
        <button href="" className="btn_login">
          {/* <div className="js-fade-text">ورود</div> */}
          <div className="js-fade-text1">ثبت نام</div>
        </button>
        <div
          className="service-button"
          onClick={() => setOpenModal((prevstate) => !prevstate)}
        >
          <img
            className="service-button_img"
            src={menu}
            width="28"
            height="26"
          />
          <div onClick={() => setOpenModal(false)} className="header_modal">
            {openModal && <Modal />}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header1;
