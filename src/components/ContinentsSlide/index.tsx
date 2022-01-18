import { Flex } from '@chakra-ui/react';
import ContinentImg from './ContinentImg';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,Pagination,Mousewheel,Keyboard } from 'swiper';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Continent } from '../../types';


SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);

interface ContinentsSlideProps {
    continents: Continent[]
  }

export default function ContinentsSlide({ continents } : ContinentsSlideProps){

  return (
    <Flex w="100%" h="100%" maxW="1240px" mx="auto" mb="10">
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 4000,
        }}
      >
        {
        continents !== undefined ? (
          continents.map((continent) => {
            return (
              <SwiperSlide key={continent.id}>
                <ContinentImg
                  image={continent.data.image.url}
                  title={continent.data.title}
                  subtitle={continent.data.subtitle}
                  slug={continent.uid}
                />
              </SwiperSlide>
            );
          })
        ) : (
          <SwiperSlide>
            <ContinentImg
              image="../images/africa.jpg"
              title="Sem título"
              subtitle="Sem descrição"
              slug="sem slug"
            />
          </SwiperSlide>
        )}
      </Swiper>
    </Flex>
  );
}