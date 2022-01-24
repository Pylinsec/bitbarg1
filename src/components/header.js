import "./header.css";
import menu from "./../assets/svg/menu.svg";
function Header1() {
  return (
    <div className="main_navbar">
      <div className="service_dialog"></div>
      <div className="main-navbar_container">
        <button
          href="https://bitbbuttonrg.me/users/login"
          className="btn_login"
        >
          {/* <div className="js-fade-text">ورود</div> */}
          <div className="js-fade-text1">ثبت نام</div>
        </button>
        <div className="service-button">
          <img src={menu} width="28" height="26" />
        </div>
      </div>
    </div>
  );
}
export default Header1;
