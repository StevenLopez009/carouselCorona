import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';

import image1 from "../assets/Product1.jpeg"
import image2 from "../assets/Product2.jpg"
import image3 from "../assets/Product3.jpg"
import image4 from "../assets/Product4.jpg"
import image5 from "../assets/Product5.jpg"
import image6 from "../assets/Product6.jpg"
import image7 from "../assets/Product7.jpg"
import ProductCard from '../components/ProductCard/ProductCard';
import ProductModal from '../components/ProductModal/ProductModal';


const slidesData = [
  {
    image: image1,
    title: 'sanitario cascade',
    price: 926900,
    quantity: "unidad"
  },
  {
    image: image2,
    title: 'piso porcelanato escocia estructurado miel cara diferenciada 20x90',
    price: 91200,
    quantity: "m2"
  },
  {
    image: image3,
    title: 'piso estructurado calamia Umulticolor caras diferenciadas 51x51',
    price: 39400,
    quantity: "m2"
  },
  {
    image: image4,
    title: 'mural thai multicolor 3pcs cara unica 30x60',
    price: 149300,
    quantity: "caja"
  },
  {
    image: image5,
    title: 'griferia ultra ahorradora para lavamanos monocontrol cascade media sahara antimicrobiano',
    price: 227900,
    quantity: "unidad"
  },
  {
    image: image6,
    title: 'griferia ultra ahorradora lavaplatos 8 pulgadas sobreponer cascade cromo',
    price: 194900,
    quantity: "unidad"
  },
  {
    image: image7,
    title: 'Ducha ultra ahorradora monocotrol oral pro mate black',
    price: 467300,
    quantity: "unidad"
  },
];

const Carousel = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)} />
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        navigation
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {slidesData.map((data, index) => (
          <SwiperSlide key={index}>
            <ProductCard {...data} onClick={() => setSelectedProduct(data)} />
          </SwiperSlide>
        ))}
      </Swiper>

    </>
  );
};

export default Carousel;
