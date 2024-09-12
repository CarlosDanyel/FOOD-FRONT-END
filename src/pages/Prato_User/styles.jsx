import styled from "styled-components";

export const Container = styled.main`
  width: 100%;

  section {
    width: 90%;

    max-width: 1120px;
    margin: 24px auto 0 auto;

    > a {
      display: flex;
      gap: 8px;
      align-items: center;

      font-weight: 700;
      font-size: 24px;
      line-height: 140%;

      color: #e1e1e6;
      margin-bottom: 52px;

      > svg {
        color: #fff;
        font-size: 23px;
      }

      @media (max-width: 880px) {
        font-weight: 500;
      }
    }

    @media (max-width: 880px) {
      width: 75%;
      margin: 33px auto 0 auto;

      a {
        margin-bottom: 16px;
      }
    }
  }
`;

export const ContainerPrato = styled.div`
  display: flex;
  gap: 47px;
  justify-content: left;

  img {
    height: 389px;
    max-width: 390px;
  }

  h1 {
    font-weight: 500;
    font-size: 40px;
    line-height: 140%;

    color: #e1e1e6;
    margin-bottom: 24px;
    margin-top: 45px;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 140%;
    margin-bottom: 24px;

    color: #e1e1e6;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    list-style: none;
    margin-bottom: 48px;

    > li {
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;

      color: #ffffff;

      padding: 4px 8px;

      background: #192227;
      border-radius: 5px;
    }
  }

  div {
    justify-content: flex-start;
  }

  @media (max-width: 880px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;

    h1 {
      font-weight: 500;
      font-size: 27.04px;
      line-height: 140%;

      color: #e1e1e6;
      margin-bottom: 24px;
      margin-top: 0px;
    }

    p {
      font-size: 16.22px;
    }

    img {
      height: 264px;
      max-width: 264px;
    }

    ul {
      align-items: center;
      justify-content: center;
    }

    div {
      justify-content: center;
      text-align: center;
      width: 100%;
    }

    button {
      width: 100%;
    }
  }
`;
