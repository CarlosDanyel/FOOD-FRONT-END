import styled from "styled-components";

export const Container = styled.fieldset`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;

  border: none;

  label {
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;

    color: #c4c4cc;
  }

  input {
    height: 48px;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    padding: 0 14px;
    border: 1px solid #ffffff;
    border-radius: 5px;
    background: transparent;

    color: #ffffff;

    &::placeholder {
      font-family: "Roboto";
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;

      color: #7c7c8a;
    }
  }
`;
