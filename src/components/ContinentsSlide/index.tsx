import { Flex } from '@chakra-ui/react';
import ContinentImg from './ContinentImg';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,Pagination,Mousewheel,Keyboard } from 'swiper';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import styles from 'styles.module.css';

SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);

export default function ContinentsSlide(){
  return(
    <Flex
      w="100%"
      h="100%"
      maxW="1240px"
      mx="auto"
      mb="10"
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay:4000,
        }}
      >
        <SwiperSlide>
          <ContinentImg
            image="images/europe.jpg"
            title="Europa" 
            description="O continente mais antigo"
            slug="europa"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContinentImg
            image="images/americanSul.jpg"
            title="América do Sul" 
            description="O continente mais antigo"
            slug="europa"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContinentImg
            image="images/america_norte.jpg"
            title="América do Norte" 
            description="O continente mais antigo"
            slug="europa"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContinentImg
            image="images/asia.jpg"
            title="Ásia" 
            description="O continente mais antigo"
            slug="europa"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContinentImg
            image="images/africa.jpg"
            title="África" 
            description="O continente mais antigo"
            slug="europa"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ContinentImg
            image="images/Oceania.jpg"
            title="Oceania" 
            description="O continente mais antigo"
            slug="europa"
          />
        </SwiperSlide>

      </Swiper>
    </Flex>
  )
}