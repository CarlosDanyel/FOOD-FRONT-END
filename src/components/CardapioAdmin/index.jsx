import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Keyboard, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { CardapioContainer, SliderCardapioContainer } from "./styles";
import { ItemCardapioAdmin } from "../ItemCardapio_Admin";

const CardapioAdmin = ({ type, title }) => {
  const [carrinho, setCarrinho] = useState([]);
  const lengthType = type.length >= 4;

  return (
    type.length > 0 && (
      <CardapioContainer $lengthType={lengthType}>
        <h2>{title}</h2>
        <SliderCardapioContainer>
          {type.length > 3 ? (
            <Swiper
              slidesPerView={2}
              slidesPerGroupSkip={5}
              centeredSlides={false}
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
                  <ItemCardapioAdmin
                    carrinhoStatus={setCarrinho}
                    valorCarrinho={carrinho}
                    data={pedido}
                    idPedido={index}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div>
              {type.map((pedido, index) => (
                <ItemCardapioAdmin
                  idPedido={index}
                  key={index}
                  data={pedido}
                  carrinhoStatus={setCarrinho}
                />
              ))}
            </div>
          )}
        </SliderCardapioContainer>
      </CardapioContainer>
    )
  );
};

export default CardapioAdmin;
