// Carousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const Carousel = () => {
  return (
    <div className="hidden rounded-lg sm:block w-full max-h-[400px] overflow-hidden md:m-10 hover:scale-105 transition-all duration-300 ease-in-out hover:rounded-[20%]">
        <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            loop
            className="rounded-xl h-full"
        >
            <SwiperSlide>
            <img src="homeimg1.jpeg" alt="Slide 1" className="h-[400px] w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
            <img src="homeimg2.jpeg" alt="Slide 2" className="h-[400px] w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
            <img src="homeimg3.jpeg" alt="Slide 3" className="h-[400px] w-full object-cover" />
            </SwiperSlide>
        </Swiper>
    </div>
  );

}

export default Carousel;
