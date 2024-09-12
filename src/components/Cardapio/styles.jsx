import styled from "styled-components";

export const CardapioContainer = styled.section`
  margin-top: 62px;

  h2 {
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;

    color: #e1e1e6;
  }

  @media (max-width: 550px) {
    margin: ${({ $lengthType }) =>
      !$lengthType ? " 0px 1rem" : "0px 0px  0px 1rem"};
    margin-top: 62px;

    h2 {
      font-family: "Poppins";

      font-weight: 500;
      font-size: 18px;
      line-height: 140%;
      color: #e1e1e6;
    }
  }
`;

export const SliderCardapioContainer = styled.div`
  position: relative;
  display: flex;

  margin-top: 62px;

  > div {
    display: flex;
    width: 100%;
    gap: 1rem;

    > div:nth-of-type(1) {
      margin-left: 0;
    }

    @media (max-width: 856px) {
      flex-direction: ${({ $lengthType }) => (!$lengthType ? "column" : "row")};
    }
  }

  @media (max-width: 828px) {
    margin-top: 24px;

    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }

    .mySwiper::before,
    .mySwiper::after {
      content: none;
    }
  }
`;
