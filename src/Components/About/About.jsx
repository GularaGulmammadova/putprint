// eslint-disable-next-line no-unused-vars
import React from 'react';
import './About.css'
import choose_icon from "./../../site assets/logo and icons/choose.png";
import design_icon from "./../../site assets/logo and icons/design.png";
import order_icon from "./../../site assets/logo and icons/order.png";
import ai_image from "./../../site assets/logo and icons/ai-image.png";

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const About = () => {
  return (
    <div className="container">
       <div className="about-content">
      <div className="about-title">
        <div className="about-subtitle">Dizayn və fərdiləşdirmək ilə öz geyiminizi yaradın</div>
        <p className="about-text">Bir neçə dəqiqə ərzində gözəl, xüsusi məhsullar yaradın və satın.</p>
        <button className="design-btn"><p className='starting-design'>Dizayna başla</p></button>
      </div>
      <div className="about-image">
        <img src="https://s3-alpha-sig.figma.com/img/3307/8081/541fad29313594308485dab9c542cf03?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cgvSp7Tg-dRc1ShFJ1NoCYWT0h0qtv-guTUTmvPEgksYtHheFBEABz12OfL5kTsddy3-1jan9auQcCEvPU9Ld~jzGSXj9g5fm9TSfI1X-zozgLQwoIGKKJIGO4slc2t3Dejx2wu2~oCqsAbuItz2Icta-PaUlfKgECfbcoPnUkbFQ8t0pd1nSmQyZYTDCipGHDgm-zCEgezKbcf~4Z5b~CzD3gAdWrUjbf5tWj4yBOnycTYnl~m9shrm-lbrzzz25a5ULjma1YUneyBBqKEcEzTQDUNEWgUkUmtdy0qLwTVLFUgj7NvIZv13atJdsTmz0OSEBoaB7CApzQTKA0VDuA__" alt="about-image" />
      </div>
    </div>


    <section className="why_us" style={{width: '100%', maxWidth: '1200px'}}> 
  <div className="why_us_title">
    Niyə Put&Printi seçməlisiniz?
  </div>
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

<div className="container" style={{width: '100%', maxWidth: '1200px', margin: 'o auto'}}>
  <div className="ai-section">
    <img src={ai_image} alt="" className='image-item' />
  <div className="text-section">
    <div className="text-desc">
    <h2 className="ai-heading">Dizayn et</h2>
    <p className="ai-title">Ai ilə sizin üçün ən uyğun və yaradıcı məhsullar</p>
    </div>
    <p className="ai-text">İstədiyiniz dizaynı seçin, biz isə qalanını AI ilə həll edək!</p>
    <button className="ai-generate">Ai ilə dizayna başla</button>
  </div>
</div>
</div>

  <div className="background-image">
    <div className="content">
      <h2 className="designer-heading">Dizaynıvıza başlamağa hazırsınız?</h2>
      <button className="start-now-design">İndi Başla</button>
    </div>
  </div>


{/* <div className="ai-image" style={{width: '100%', maxWidth: '1200px'}}>
    <div className="ai-image-left">
    <img src={ai_image} alt="" style={{width: '636px', height:'361px'}}/>
    </div>
      <h2 className="ai-image-heading">Dizayn et</h2>
      <p className="ai-image-title">Ai ilə sizin üçün ən uyğun və yaradıcı məhsullar</p>
      <div className="ai-image-desc">
        <p className="ai-image-text">İstədiyiniz dizaynı seçin, biz isə qalanını AI ilə həll edək!</p>
        <button className="ai-image-generate">Ai ilə dizayna başla</button>
      </div>
</div> */}

{/* <section className="designer" style={{width: '100%', maxWidth: '1440px'}}>
<div className="row">
  <div className="col-g-12">
    <div className="right">
      <div className="own_designer">
        <img src="https://s3-alpha-sig.figma.com/img/afef/fb46/5cb04fe930e5c58f1c741b49a6ed353b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hcx1BsJwfE9hc~ouegtT-cGLvEPkBRjdfd4AMUsHLiP5qImZHqADEc2S2KWLtO1CUXKqWCKjj-g9lrrRHtE2msM4UKLUl4Vhkb8BZabeAiI3DdBwfOWbuXA8EQGfIKCboCiIqBktlvVjHCcJfydqhS7nyPOPYtjxbfiInJ5II5JzGwKOi5ZBSq-F0nI7rQyVu6uU3Dd4CSAwOLM-AZUhJS1Jf23tMOTjdGS4mvsyT8yGzAO3PTUw9Um4zpqE4k0wHM9x8OzU90bs31gWSFo0LHJCFSLjtZZEFwVnS-~qHywxp7ov2DT3OA4gl1tZioJS6SfCb43uV60Af1x9D9231g__" alt="" />
      </div>
      <div className="design-desc">
        <h2 className="designer-heading">Dizaynıvıza başlamağa hazırsınız?</h2>
        <button className="start-now">İndi Başla</button>
      </div>
    </div>
  </div>
</div>
</section> */}
    </div>


    
    // <div className="about">
    //           <Swiper
    //     spaceBetween={30}
    //     centeredSlides={true}
    //     autoplay={{
    //       delay: 3000,
    //       disableOnInteraction: false,
    //     }}
    //     pagination={{
    //       clickable: true,
    //     }}
    //     navigation={true}
    //     modules={[Autoplay, Pagination, Navigation]}
    //     className="mySwiper"
    //   >
    //     <SwiperSlide><img src={'https://s3-alpha-sig.figma.com/img/3307/8081/541fad29313594308485dab9c542cf03?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cgvSp7Tg-dRc1ShFJ1NoCYWT0h0qtv-guTUTmvPEgksYtHheFBEABz12OfL5kTsddy3-1jan9auQcCEvPU9Ld~jzGSXj9g5fm9TSfI1X-zozgLQwoIGKKJIGO4slc2t3Dejx2wu2~oCqsAbuItz2Icta-PaUlfKgECfbcoPnUkbFQ8t0pd1nSmQyZYTDCipGHDgm-zCEgezKbcf~4Z5b~CzD3gAdWrUjbf5tWj4yBOnycTYnl~m9shrm-lbrzzz25a5ULjma1YUneyBBqKEcEzTQDUNEWgUkUmtdy0qLwTVLFUgj7NvIZv13atJdsTmz0OSEBoaB7CApzQTKA0VDuA__'}/></SwiperSlide>
    //     <SwiperSlide><img src={'https://s3-alpha-sig.figma.com/img/3307/8081/541fad29313594308485dab9c542cf03?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cgvSp7Tg-dRc1ShFJ1NoCYWT0h0qtv-guTUTmvPEgksYtHheFBEABz12OfL5kTsddy3-1jan9auQcCEvPU9Ld~jzGSXj9g5fm9TSfI1X-zozgLQwoIGKKJIGO4slc2t3Dejx2wu2~oCqsAbuItz2Icta-PaUlfKgECfbcoPnUkbFQ8t0pd1nSmQyZYTDCipGHDgm-zCEgezKbcf~4Z5b~CzD3gAdWrUjbf5tWj4yBOnycTYnl~m9shrm-lbrzzz25a5ULjma1YUneyBBqKEcEzTQDUNEWgUkUmtdy0qLwTVLFUgj7NvIZv13atJdsTmz0OSEBoaB7CApzQTKA0VDuA__'}/></SwiperSlide>
    //     <SwiperSlide><img src={'https://s3-alpha-sig.figma.com/img/3307/8081/541fad29313594308485dab9c542cf03?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cgvSp7Tg-dRc1ShFJ1NoCYWT0h0qtv-guTUTmvPEgksYtHheFBEABz12OfL5kTsddy3-1jan9auQcCEvPU9Ld~jzGSXj9g5fm9TSfI1X-zozgLQwoIGKKJIGO4slc2t3Dejx2wu2~oCqsAbuItz2Icta-PaUlfKgECfbcoPnUkbFQ8t0pd1nSmQyZYTDCipGHDgm-zCEgezKbcf~4Z5b~CzD3gAdWrUjbf5tWj4yBOnycTYnl~m9shrm-lbrzzz25a5ULjma1YUneyBBqKEcEzTQDUNEWgUkUmtdy0qLwTVLFUgj7NvIZv13atJdsTmz0OSEBoaB7CApzQTKA0VDuA__'}/></SwiperSlide>
    //   </Swiper>
    // </div>
  )
}

export default About