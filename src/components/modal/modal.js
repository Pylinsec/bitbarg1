import "./modal.css";
import identity from "./../../assets/modal1/identity.png";
import about from "./../../assets/modal1/about.png";
import bag from "./../../assets/modal1/bag.png";
import bitgap from "./../../assets/modal1/bitgap.png";
import comment from "./../../assets/modal1/comment.png";
import direction from "./../../assets/modal1/direction.png";
import home from "./../../assets/modal1/home.png";
import login from "./../../assets/modal1/login.png";
import notifications from "./../../assets/modal1/notifications.png";
import opportunity from "./../../assets/modal1/opportunity.png";
import order from "./../../assets/modal1/order.png";
import price from "./../../assets/modal1/price.png";
import profile from "./../../assets/modal1/profile.png";
import question from "./../../assets/modal1/question.png";
import relationship from "./../../assets/modal1/relationship.png";
import wage from "./../../assets/modal1/wage.png";
import wallet from "./../../assets/modal1/wallet.png";

function Modal() {
  return (
    <div className="modal_container">
      <div className="row1">
        {modal_json.map((item) => (
          <div className="col1">
            <a className="modal_a" href={"#_self"}>
              <img src={item.icon} className="bitbarg-services-bg-profile" />
              <div className="modal_service_title">{item.title}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
var modal_json = [
  { icon: profile, title: "پروفایل" },
  { icon: order, title: "سفارشات" },
  { icon: identity, title: "احرازهویت" },
  { icon: bitgap, title: "بیت گپ" },
  { icon: price, title: "قیمت لحظه ای" },
  { icon: wage, title: "کارمزدها" },
  { icon: notifications, title: "به من اطلاع بده!" },
  { icon: wallet, title: "ساخت کیف پول" },
  { icon: question, title: "سوالات متداول " },
  { icon: comment, title: "نظرات کاربران" },
  { icon: direction, title: "مسیر بیت برگ" },
  { icon: relationship, title: "ارتباط با مدیریت" },
  { icon: bag, title: "گزارش باگ" },
  { icon: opportunity, title: "فرصت های شغلی" },
  { icon: about, title: "درباره ما" },
];
export default Modal;
