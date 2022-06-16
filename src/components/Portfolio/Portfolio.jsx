import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Appoga from "../../img/Appoga.png";
import Comfy_Store from "../../img/Comfy_Store.png";
import Estate_Prop from "../../img/Estate_Prop.png";
import Deca_Job from "../../img/Deca_Job.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Appoga} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Comfy_Store} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Deca_Job} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Estate_Prop} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
