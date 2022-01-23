import "./main1.css";
import bitbarglogo from "./../assets/svg/bitbarglogo.svg";
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
                onclick="if (!window.__cfRLUnblockHandlers) return false; this.select();"
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
                onclick="if (!window.__cfRLUnblockHandlers) return false; this.select();"
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
                onclick="if (!window.__cfRLUnblockHandlers) return false; this.select();"
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
      <div className="main_action_container"></div>
    </div>
  );
}
export default Main1;
