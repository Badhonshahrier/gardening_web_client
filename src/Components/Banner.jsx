import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const  Banner = ({ singleData }) => {
 

  return (
    <div className="w-11/12 mx-auto p-4 mt-10 bg-green-50">
      <Swiper

           modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="rounded-xl"
      >
        {singleData.map((item, index) => (
          <SwiperSlide  key={index}>
            <div
              className="relative h-96 rounded-xl overflow-hidden bg-cover bg-center transition duration-500 hover:scale-[1.01] cursor-pointer"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="bg-gradient-to-t from-black/70 to-transparent absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h2 className="text-3xl font-extrabold mb-2 text-green-300 drop-shadow-lg">
                  {item.title}
                </h2>
                <p className="text-sm font-medium mb-4 drop-shadow-sm">{item.date}</p>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full shadow-md transition duration-300 w-fit"
                >
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;



