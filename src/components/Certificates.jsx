import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { certificates } from "../constants"; // ✅ import here

const totalCertificates = certificates.length;

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

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
          navigation={true}
          slidesPerView={1}
          onSlideChange={(swiper) =>
            setCurrentIndex(((swiper.realIndex + totalCertificates) % totalCertificates) + 1)
          }
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper pb-6"
        >
          {certificates.map((imgSrc, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <div className="h-[240px] md:h-[300px] lg:h-[340px] flex items-center justify-center p-4">
                  <img
                    src={imgSrc}
                    alt={`certificate-${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Centered Slide Counter */}
        <div className="text-center mt-4 text-sm text-gray-400">
          {currentIndex} / {totalCertificates}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
