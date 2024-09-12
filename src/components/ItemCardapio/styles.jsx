import styled from "styled-components";

export const ItemContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  text-align: center;
  gap: 15px;

  box-sizing: border-box;

  padding: 24px;

  isolation: isolate;

  background: #00070a;

  border: 1px solid #000204;
  border-radius: 8px;

  > button {
    display: flex;
    align-self: flex-end;
    position: absolute;
    top: 16px;

    background: transparent;
    border: none;

    > svg {
      font-size: 25px;
      color: #fff;
    }
  }

  .detailes {
    cursor: pointer;
    > div {
      img {
        height: 176px;
        max-width: 100%;

        @media (max-width: 693px) {
          width: 100%;
          max-height: 88px;
        }
      }
    }
    strong {
      font-weight: 700;
      font-size: 24px;
      line-height: 140%;

      text-align: center;

      color: #e1e1e6;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;

      text-align: center;

      color: #c4c4cc;
    }

    > span {
      font-weight: 400;
      font-size: 32px;
      line-height: 160%;

      color: #82f3ff;
    }

    @media (max-width: 693px) {
      display: flex;
      flex-direction: column;
      gap: 12px;
      align-items: center;

      strong {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;

        text-align: center;

        color: #e1e1e6;
      }

      p {
        display: none;
      }

      > span {
        font-family: "Roboto";

        font-weight: 400;
        font-size: 16px;
        line-height: 100%;

        text-align: center;

        color: #82f3ff;
        margin-bottom: 12px;
      }
    }
  }

  form {
    width: 100%;
  }
`;
