import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  text-align: center;
  gap: 15px;
  height: 100%;
  box-sizing: border-box;

  padding: 24px;

  isolation: isolate;

  background: #00070a;

  border: 1px solid #000204;
  border-radius: 8px;

  .containerBtn {
    display: flex;
    justify-content: flex-end;
    width: 100%;

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
  }

  > div {
    img {
      height: 176px;
      max-width: 100%;

      @media (max-width: 693px) {
        max-width: 100%;
        height: 100%;
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

  form {
    width: 100%;
  }
`;
