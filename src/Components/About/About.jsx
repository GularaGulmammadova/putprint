// eslint-disable-next-line no-unused-vars
import React from "react";
import "./About.css";
import choose_icon from "./../../site assets/logo and icons/choose.png";
import design_icon from "./../../site assets/logo and icons/design.png";
import order_icon from "./../../site assets/logo and icons/order.png";
import ai_image from "./../../site assets/logo and icons/ai-image.png";

const About = () => {
  return (
    <div className="container">
      <div className="about-content">
        <div className="about-title">
          <div className="about-subtitle">
            Dizayn və fərdiləşdirmək ilə öz geyiminizi yaradın
          </div>
          <p className="about-text">
            Bir neçə dəqiqə ərzində gözəl, xüsusi məhsullar yaradın və satın.
          </p>
          <button className="design-btn">
            <p className="starting-design">Dizayna başla</p>
          </button>
        </div>
        <div className="about-image">
          <img
            src="https://s3-alpha-sig.figma.com/img/3307/8081/541fad29313594308485dab9c542cf03?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cgvSp7Tg-dRc1ShFJ1NoCYWT0h0qtv-guTUTmvPEgksYtHheFBEABz12OfL5kTsddy3-1jan9auQcCEvPU9Ld~jzGSXj9g5fm9TSfI1X-zozgLQwoIGKKJIGO4slc2t3Dejx2wu2~oCqsAbuItz2Icta-PaUlfKgECfbcoPnUkbFQ8t0pd1nSmQyZYTDCipGHDgm-zCEgezKbcf~4Z5b~CzD3gAdWrUjbf5tWj4yBOnycTYnl~m9shrm-lbrzzz25a5ULjma1YUneyBBqKEcEzTQDUNEWgUkUmtdy0qLwTVLFUgj7NvIZv13atJdsTmz0OSEBoaB7CApzQTKA0VDuA__"
            alt="about-image"
          />
        </div>
      </div>

      <section className="why_us">
        <div className="why_us_title">Niyə Put&Printi seçməlisiniz?</div>
        <div className="why_us_content">
          <div className="why_us_info">
            <div className="why_us_img">
              <img src={choose_icon} alt="Seçin Icon" />
            </div>
            <div className="why_us_subtitle">Seçin</div>
            <div className="why_us_text">
              Bir-birindən fərqli keyfiyyətli məhsul arasından istədiyini seç
            </div>
          </div>

          <div className="why_us_info">
            <div className="why_us_img">
              <img src={design_icon} alt="Dizayn Icon" />
            </div>
            <div className="why_us_subtitle">Dizayn et</div>
            <div className="why_us_text">
              Zövqünüzə uyğun faylı yükləyin və ya Ai ilə dizayn yaradın
            </div>
          </div>

          <div className="why_us_info">
            <div className="why_us_img">
              <img src={order_icon} alt="Sifariş Icon" />
            </div>
            <div className="why_us_subtitle">Sifariş ver</div>
            <div className="why_us_text">
              Sadəcə bir neçə kliklə seçiminizi tamamlayın
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="ai-section">
          <img src={ai_image} alt="" className="image-item" />
          <div className="text-section">
            <div className="text-desc">
              <h2 className="ai-heading">Dizayn et</h2>
              <p className="ai-title">
                Ai ilə sizin üçün ən uyğun və yaradıcı məhsullar
              </p>
            </div>
            <p className="ai-text">
              İstədiyiniz dizaynı seçin, biz isə qalanını AI ilə həll edək!
            </p>
            <button className="ai-generate">Ai ilə dizayna başla</button>
          </div>
        </div>
      </div>

      <div className="background-image">
        <div className="content">
          <h2 className="designer-heading">
            Dizaynıvıza başlamağa hazırsınız?
          </h2>
          <button className="start-now-design">İndi Başla</button>
        </div>
      </div>
    </div>
  );
};

export default About;
