import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Keyboard, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { ItemCardapio } from "../ItemCardapio";

import { CardapioContainer, SliderCardapioContainer } from "./styles";

const Cardapio = ({ type, title, setCarValue }) => {
  const lengthType = type.length >= 4;

  return (
    type.length > 0 && (
      <CardapioContainer $lengthType={lengthType}>
        <h2>{title}</h2>
        <SliderCardapioContainer>
          {type.length > 3 ? (
            <Swiper
              slidesPerView={2}
              centeredSlides={false}
              slidesPerGroupSkip={5}
              spaceBetween={16}
              breakpoints={{
                769: {
                  slidesPerView: 3.6,
                  slidesPerGroup: 2,
                },
                550: {
                  spaceBetween: 16,
                  slidesPerView: 2,
                },
                390: {
                  spaceBetween: 16,
                  slidesPerView: 1.84,
                },
                0: {
                  spaceBetween: 16,
                  slidesPerView: 1,
                },
              }}
              scrollbar={true}
              navigation={true}
              modules={[Keyboard, Scrollbar, Navigation, Pagination]}
              className="mySwiper"
            >
              {type.map((pedido, index) => (
                <SwiperSlide key={index}>
                  <ItemCardapio
                    carrinhoStatus={setCarValue}
                    data={pedido}
                    idPedido={index}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div>
              {type.map((pedido, index) => (
                <ItemCardapio
                  idPedido={index}
                  key={index}
                  data={pedido}
                  carrinhoStatus={setCarValue}
                />
              ))}
            </div>
          )}
        </SliderCardapioContainer>
      </CardapioContainer>
    )
  );
};

export default Cardapio;
