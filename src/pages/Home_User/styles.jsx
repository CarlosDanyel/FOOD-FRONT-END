import styled from "styled-components";

export const Display = styled.div`
  width: 95%;

  max-width: 1120px;
  margin: 164px auto 0 auto;

  @media (max-width: 550px) {
    margin: 54px auto 0 auto;
    width: 100%;
  }
`;

export const ContainerDisplaySectionSabores = styled.section`
  position: relative;
  height: 290px;
  padding: 0 1rem;

  padding: 0 100px;

  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;

  > div:nth-of-type(1) {
    > img {
      height: 406px;
      position: absolute;
      bottom: 0;
      left: -58px;
    }
  }

  > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-self: center;

    h1 {
      font-weight: 500;
      font-size: 40px;
      line-height: 140%;

      color: #e1e1e6;
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;

      color: #e1e1e6;
    }
  }

  @media (max-width: 1200px) {
    > div:nth-of-type(1) {
      > img {
        height: 350px;
        position: absolute;
        bottom: 0;
        left: -58px;
      }
    }

    @media (max-width: 963px) {
      align-items: center;
      justify-content: center;
      text-align: center;

      > div:nth-of-type(1) {
        > img {
          display: none;
        }
      }

      > div:nth-of-type(2) {
        gap: 12px;
      }
    }

    @media (max-width: 550px) {
      height: 120px;
      padding: 36px 21px 22px 21px;
      margin: 0 1rem;
      text-align: left;
      justify-content: end;

      > div:nth-of-type(1) {
        > img {
          display: flex;
          height: 149px;
          position: absolute;
          bottom: 0;
          left: -50px;
        }
      }

      > div:nth-of-type(2) {
        gap: 3px;
        align-items: end;

        h1 {
          width: 202px;

          font-weight: 600;
          font-size: 18px;
          line-height: 140%;

          color: #e1e1e6;
        }

        p {
          width: 202px;
          font-family: "Poppins";
          font-weight: 400;
          font-size: 12px;
          line-height: 140%;

          color: #e1e1e6;
        }
      }
    }

    @media (max-width: 416px) {
      text-align: center;
      justify-content: center;
      > div:nth-of-type(1) {
        > img {
          display: none;
        }
      }
    }
  }
`;
