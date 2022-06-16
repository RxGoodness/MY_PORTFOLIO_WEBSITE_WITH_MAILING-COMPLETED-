import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import boyz from '../../img/boyz.png'
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: boyz,
      review:
        "My best assistant ever, easy to communicate and perfect job done always!!!! Toheeb was able to deliver a user-friendly and well functioning project. Meticulously done and delivered much ahead of the due time. A pleasure to work with every time and highly recommended.          -- Natasha",
    },
    {
      img: boyz,
      review:
        "Toheeb succinctly do my work. I know have a comprehensive knowledge website thanks to him. Great and timely communication and the he is highly professional. I will recommend this service to anyone interested in a software development and will order again. --Ridwanu",
    },
    {
      img: boyz,
      review:
        "Toheeb is a great asset to any team he joins. A critical thinker, problem solver, business-minded and goal-oriented engineer, the best I've ever worked with. He gives 100% commitment to his assigned tasks and go extra miles, my recommendations.  --Naheem",
    },
    {
      img: boyz,
      review:
        "Toheeb was great to work with I look forward to my next project with him. --Steve",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
