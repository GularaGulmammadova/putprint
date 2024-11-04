// eslint-disable-next-line no-unused-vars
import React from "react";
import "./About.css";
import choose_icon from "./../../site assets/logo and icons/choose.png";
import design_icon from "./../../site assets/logo and icons/design.png";
import order_icon from "./../../site assets/logo and icons/order.png";
import ai_image from "./../../site assets/ai_image.png";
import design_img from "./../../site assets/design_img.png"
import { Link } from "react-router-dom";
import bg_img from './../../site assets/areuready.png';


const About = () => {

  return (
    <div className="container">
      <div className="about-content">
        <div className="about-title">
          <div className="about-subtitle">
          Dizaynla öz geyimini fərdiləşdir!
          </div>
          <p className="about-text">
          Bir neçə dəqiqə ərzində özəl məhsul yarat və sifariş et.
          </p>
          <button className="design-btn">
          <Link to="/products"><p className="starting-design">Dizayna başla</p></Link>
          </button>
        </div>
        <div className="about-image">
          <img
          src={design_img}
            alt="about-image"
          />
        </div>
      </div>
      <section className="why_us">
        <div className="why_us_title">Niyə Put&Printi seçməlisən?</div>
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
              Zövqünə uyğun faylı yüklə və ya AI ilə dizayn yarat
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
              AI ilə sənin üçün yaradıcılığın ən yüksək nöqtəsi!
              </p>
            </div>
            <p className="ai-text">
              İstədiyiniz dizaynı seçin, biz isə qalanını AI ilə həll edək!
            </p>
            <Link to="/products"><button className="ai-generate">AI ilə dizayna başla</button></Link>
          </div>
        </div>
      </div>
      <div className="background-image">
        <div className="content">  
          <img src={bg_img} alt="" />
        <Link to="/products"><button className="start-now-design">İndi Başla</button></Link>
        </div>
      </div>
    </div>
  );
};

export default About;
