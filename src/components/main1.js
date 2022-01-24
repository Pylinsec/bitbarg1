import "./main1.css";
import bitbarglogo from "./../assets/svg/bitbarglogo.svg";
import call from "./../assets/svg/call.svg";
import favpng from "./../assets/png/favpng.png";
function Main1() {
  return (
    <div className="main_contianer">
      <div className="main_logo">
        <div class="logo">
          <img
            width="200"
            height="77"
            className="img-logo"
            title="بیت برگ"
            alt="بیت برگ"
            src={bitbarglogo}
          />
          <div className="main_img_hover">صرافی آنلاین ارزهای دیجیتال</div>
        </div>
      </div>
      <div className="main_row_section">
        <div className="main_row_section1">
          <div class="row_section1">
            <div className="text-field--group">
              <input
                type="text"
                onclick=""
                id="price"
                className="row_section1_input_ui"
              />
              <label className="main_label1">تومان</label>
            </div>
          </div>
          <div class="row_section1">
            <div className="text-field--group">
              <input
                type="number"
                onclick=""
                id="unit"
                value="1"
                className="row_section1_input_ui"
              />
              <label className="main_label2">واحد</label>
            </div>
          </div>
          <div className="row_section1">
            <div className="text-field--group">
              <input
                type="number"
                onclick=""
                id="unit"
                value="1"
                className="row_section1_input_ui"
              />
              <label className="main_label3">انتخاب ارز</label>
            </div>
          </div>
        </div>
        <div className="main_row_section2"></div>
        <div className="main_row_section3"></div>
      </div>
      <div className="main_action_container">
        <div className="col_12">
          <button id="btn_buy" onclick="" className="btn_request_buy">
            <span>درخواست خرید</span>
          </button>
          <button id="btn_sell" onclick="" className="btn_sell">
            <span>فروش</span>
          </button>
        </div>

        <div className="buy_content">
          <h2 className="magic_h2">
            ۷ روز هفته ، ۲۴ ساعت شبانه‌روز
            <br />
            در خدمت شما هستیم
          </h2>
        </div>

        <div className="sell_content*****"></div>
        <div class="contact">
          <a className="contact_a" href="">
            91079677 <i class="fa fa-phone"></i>
          </a>
          <span>
            <img className="call_icon" src={call} />
          </span>
        </div>
      </div>
      <div
        className="main_footer"
        style={{ backgroundImage: { favpng } }}
      ></div>
    </div>
  );
}
export default Main1;
