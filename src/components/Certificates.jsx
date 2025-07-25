import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const certificates = [
  { img: "/certs/cert1.jpg", title: "React Mastery" },
  { img: "/certs/cert2.jpg", title: "JavaScript Pro" },
  { img: "/certs/cert3.jpg", title: "AI for Beginners" },
  { img: "/certs/cert4.jpg", title: "CSS Wizard" },
  { img: "/certs/cert5.jpg", title: "Full Stack Explorer" },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#915EFF]">
          Certificates
        </h2>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true} // ✅ Enable arrow buttons
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper pb-10"
        >
          {certificates.map((cert, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <div className="h-[240px] md:h-[300px] lg:h-[340px] flex items-center justify-center">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="mt-4 text-center text-sm sm:text-base font-medium text-white pb-4">
                  {cert.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Certificates;
