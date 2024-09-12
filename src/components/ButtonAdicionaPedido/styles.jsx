import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;

  justify-content: center;
  gap: 16px;

  > div:nth-of-type(1) {
    display: flex;
    align-items: center;

    > span {
      font-weight: 700;
      font-size: 20px;
      line-height: 160%;

      color: #e1e1e6;

      padding: 0 18px;

      @media (max-width: 550px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;

        color: #e1e1e6;
      }
    }

    button {
      background: none;
      border: none;
      color: #ffffff;
    }
  }

  > div:nth-of-type(2) {
    button {
      align-items: center;
      padding: 12px 24px;

      background: #750310;
      border: none;
      border-radius: 5px;

      font-weight: 500;
      font-size: 14px;
      line-height: 24px;

      color: #ffffff;
    }
  }

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;

    > div:nth-of-type(2) {
      width: 100%;

      button {
        width: 100%;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px 24px;

        background: #750310;
        border: none;
        border-radius: 5px;

        font-weight: 500;
        font-size: 14px;
        line-height: 24px;

        color: #ffffff;
      }
    }
  }
`;
