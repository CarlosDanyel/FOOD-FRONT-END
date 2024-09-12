import styled from "styled-components";

export const Container = styled.div`
  display: none;

  @media (max-width: 852px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 28px 28px 0px 28px;

    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 10;
      background: #000a0f;
      transform: translateX(-100%);
      transition: transform 0.5s ease-in-out;

      &.navbarActive {
        transform: translateX(0);
      }

      div:nth-of-type(1) {
        width: 100%;
        display: flex;
        gap: 16px;

        padding: 60px 28px 29px 28px;
        background-color: #001119;

        button {
          background-color: transparent;
          border: none;

          img {
            width: 18px;
            height: 18px;
          }
        }
      }
    }

    button {
      background-color: transparent;
      border: none;

      > img {
        width: 24px;
      }
    }

    div:nth-of-type(1) {
      display: flex;
      align-items: center;
      gap: 3px;

      img {
        height: 30px;
      }

      .nameLogo {
        font-family: "Roboto";

        font-weight: 400;
        font-size: 12px;
        line-height: 160%;

        color: #82f3ff;
      }
    }

    div:nth-of-type(2) {
      position: relative;
      display: flex;

      .carrinho {
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: -5px;
        left: 18px;
        width: 20px;
        height: 20px;

        background: #750310;
        border-radius: 99px;

        font-family: "Poppins";

        font-weight: 500;
        font-size: 14px;
        line-height: 24px;

        color: #ffffff;
      }
    }
  }
`;

export const Seach = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 36px 28px 0 28px;

  > input {
    flex: 1;
    height: 48px;
    background-color: #0d1d25;
    position: relative;

    background-image: ${({ $vericaState }) =>
      !$vericaState
        ? `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3.89499 1.61739C5.22926 0.725854 6.79794 0.25 8.40266 0.25H8.40271C10.5545 0.250137 12.6181 1.105 14.1397 2.62655C15.6613 4.14811 16.5161 6.21174 16.5163 8.36355V8.36359C16.5163 9.96831 16.0404 11.537 15.1489 12.8713C14.9924 13.1054 14.8244 13.3305 14.6456 13.5459L19.5694 18.4697C19.8623 18.7626 19.8623 19.2374 19.5694 19.5303C19.2765 19.8232 18.8016 19.8232 18.5087 19.5303L13.5849 14.6065C12.9626 15.1232 12.263 15.5467 11.5076 15.8596C10.025 16.4737 8.39366 16.6344 6.81978 16.3213C5.24589 16.0082 3.80019 15.2355 2.66548 14.1008C1.53078 12.9661 0.758031 11.5204 0.444967 9.94648C0.131902 8.37259 0.292578 6.74122 0.906677 5.25866C1.52078 3.77609 2.56072 2.50892 3.89499 1.61739ZM8.40261 1.75C7.09458 1.75001 5.81593 2.13789 4.72834 2.86459C3.64074 3.5913 2.79306 4.6242 2.2925 5.83268C1.79193 7.04116 1.66096 8.37093 1.91614 9.65384C2.17133 10.9368 2.80122 12.1152 3.72614 13.0401C4.65107 13.965 5.8295 14.5949 7.11241 14.8501C8.39532 15.1053 9.7251 14.9743 10.9336 14.4738C12.1421 13.9732 13.175 13.1255 13.9017 12.0379C14.6284 10.9503 15.0162 9.67167 15.0163 8.36364M8.40266 1.75C10.1567 1.75012 11.8388 2.44695 13.079 3.68721C14.3193 4.92748 15.0161 6.6096 15.0163 8.36359' fill='%23C4C4CC'/%3E%3C/svg%3E%0A")`
        : "none"};
    background-repeat: no-repeat;
    background-position: 14px center;
    border: none;
    padding: 12px 14px;
    border-radius: 5px;
    color: #fff;
    outline: none;

    &::placeholder {
      padding-left: 28px;
    }
  }

  > span,
  a {
    position: none;
    border-bottom: 1px solid #e1e1e6;
    padding: 0 0 10px 0;
    font-family: "Poppins";

    font-weight: 300;
    font-size: 24px;
    line-height: 140%;
    cursor: pointer;

    color: #e1e1e6;
  }
`;
