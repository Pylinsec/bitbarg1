import "./modal2.css";
import { Routes, Route, Link } from "react-router-dom";
import BTC from "./../../assets/png/BTC.png";
import ETH from "./../../assets/png/ETH.png";
import BUSD from "./../../assets/png/BUSD.png";
import LUNA from "./../../assets/png/LUNA.png";
import BNB from "./../../assets/png/BNB.png";
import SOL from "./../../assets/png/SOL.png";
import FTM from "./../../assets/png/FTM.png";
import SAND from "./../../assets/png/SAND.png";
import USDC from "./../../assets/png/USDC.png";
import USDT from "./../../assets/png/USDT.png";
import close from "./../../assets/svg/close.svg";
import search from "./../../assets/svg/search.svg";
function Modal2({ closeModal }) {
  return (
    <div>
      <div onClick={""} className="modal2_container">
        <div className="modal2_header">
          <div onClick={() => closeModal(false)} className="close_btn">
            <img src={close} alt="close" />
          </div>
          <div>
            <img src={search} alt="search" />
            <input
              className="myInput"
              type="text"
              value="جستجو بر اساس نام و یا نماد اختصاری"
              autocomplete="off"
              placeholder="جستجو بر اساس نام و یا نماد اختصاری"
            />
          </div>
        </div>
        {modal2_json.map((item) => (
          <body className="modal2_body">
            <div className="modal2_body_right">
              <img
                className="modal2_icon"
                src={item.icon}
                alt={item.englishname}
              />
              <div className="right_col">
                <span className="span1">{item.persianname}</span>
                <span className="span1">{item.englishname}</span>
              </div>
            </div>
            <div className="modal2_body_left">
              <span className="span2">قیمت خرید</span>
              <span className="span4">{item.price} تومان</span>
            </div>
          </body>
        ))}
      </div>
    </div>
  );
}
var modal2_json = [
  {
    persianname: "بیت کوین",
    englishname: "Bitcoin - BTC",
    icon: BTC,
    price: 9000000000,
  },
  {
    persianname: "اتریوم",
    englishname: "Ethereum -ETH",
    icon: ETH,
    price: 7777777777777,
  },
  {
    persianname: "باننس یو اس دی",
    englishname: "Binance USD - BUSD",
    icon: BUSD,
    price: 900000770000,
  },
  {
    persianname: "تثر",
    englishname: "Tether - USDT",
    icon: USDT,
    price: 9000000000,
  },
  {
    persianname: "لونا(ترا)",
    englishname: "Terra - LUNA",
    icon: LUNA,
    price: 9000000000,
  },
  {
    persianname: "بایننس کوین",
    englishname: "Binance Coin - BNB",
    icon: BNB,
    price: 9000000000,
  },
  {
    persianname: "سولانا",
    englishname: "Solana - SOL",
    icon: SOL,
    price: 9000000000,
  },
  {
    persianname: "فانتوم",
    englishname: "Fantom - FTM",
    icon: FTM,
    price: 9000000000,
  },
  {
    persianname: "سندباکس",
    englishname: "The Sandbox - SAND",
    icon: SAND,
    price: 9000000000,
  },
  {
    persianname: "یو اس دی کوین",
    englishname: "USD Coin - USDC",
    icon: USDC,
    price: 9000000000,
  },
  {
    persianname: "بیت کوین",
    englishname: "Bitcoin - BTC",
    icon: BTC,
    price: 9000000000,
  },
  {
    persianname: "بیت کوین",
    englishname: "Bitcoin - BTC",
    icon: BTC,
    price: 9000000000,
  },
  {
    persianname: "بیت کوین",
    englishname: "Bitcoin - BTC",
    icon: BTC,
    price: 9000000000,
  },
  {
    persianname: "بیت کوین",
    englishname: "Bitcoin - BTC",
    icon: BTC,
    price: 9000000000,
  },
  {
    persianname: "بیت کوین",
    englishname: "Bitcoin - BTC",
    icon: BTC,
    price: 9000000000,
  },
  {
    persianname: "بیت کوین",
    englishname: "Bitcoin - BTC",
    icon: BTC,
    price: 9000000000,
  },
  {
    persianname: "بیت کوین",
    englishname: "Bitcoin - BTC",
    icon: BTC,
    price: 9000000000,
  },
  {
    persianname: "بیت کوین",
    englishname: "Bitcoin - BTC",
    icon: BTC,
    price: 9000000000,
  },
  {
    persianname: "بیت کوین",
    englishname: "Bitcoin - BTC",
    icon: BTC,
    price: 9000000000,
  },
  {
    persianname: "بیت کوین",
    englishname: "Bitcoin - BTC",
    icon: BTC,
    price: 9000000000,
  },
  {
    persianname: "بیت کوین",
    englishname: "Bitcoin - BTC",
    icon: BTC,
    price: 9000000000,
  },
  {
    persianname: "بیت کوین",
    englishname: "Bitcoin - BTC",
    icon: BTC,
    price: 9000000000,
  },
  {
    persianname: "بیت کوین",
    englishname: "Bitcoin - BTC",
    icon: BTC,
    price: 9000000000,
  },
  {
    persianname: "بیت کوین",
    englishname: "Bitcoin - BTC",
    icon: BTC,
    price: 9000000000,
  },
  {
    persianname: "بیت کوین",
    englishname: "Bitcoin - BTC",
    icon: BTC,
    price: 9000000000,
  },
  {
    persianname: "بیت کوین",
    englishname: "Bitcoin - BTC",
    icon: BTC,
    price: 9000000000,
  },
  {
    persianname: "بیت کوین",
    englishname: "Bitcoin - BTC",
    icon: BTC,
    price: 9000000000,
  },
  {
    persianname: "بیت کوین",
    englishname: "Bitcoin - BTC",
    icon: BTC,
    price: 9000000000,
  },
  {
    persianname: "بیت کوین",
    englishname: "Bitcoin - BTC",
    icon: BTC,
    price: 9000000000,
  },
  {
    persianname: "بیت کوین",
    englishname: "Bitcoin - BTC",
    icon: BTC,
    price: 9000000000,
  },
  {
    persianname: "بیت کوین",
    englishname: "Bitcoin - BTC",
    icon: BTC,
    price: 9000000000,
  },
];
export default Modal2;
