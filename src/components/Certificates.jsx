import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation"; // ✅ Add this

const certificates = [
  { img: "/certs/cert1.jpg", title: "React Mastery" },
  { img: "/certs/cert2.jpg", title: "JavaScript Pro" },
  { img: "/certs/cert3.jpg", title: "AI for Beginners" },
  // ➕ Add more certificates as needed
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20  text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#915EFF]">
          Certificates
        </h2>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 80,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true} // ✅ Enable arrows
          modules={[EffectCoverflow, Pagination, Autoplay, Navigation]} // ✅ Include Navigation
          className="mySwiper"
        >
          {certificates.map((cert, index) => (
            <SwiperSlide
              key={index}
              className="max-w-[220px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] w-full shadow-lg rounded-xl overflow-hidden"
            >
              <div className="w-full h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px] bg-white flex items-center justify-center">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-2 text-center text-sm sm:text-base font-medium text-white">
                {cert.title}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Certificates;
