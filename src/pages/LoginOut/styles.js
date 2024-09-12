import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  section{
    width: 95%;
    height: 100%;
    max-width: 1107px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    gap: 15px;
    align-items: center;

    >div {
      img {
        width: 255.56px;
      }
    }

    form {
      width: 476px;
      padding: 64px;
      background: #001119;

      border-radius: 16px;
      text-align: center;

      display: flex;
      flex-direction: column;
      gap: 32px;

      h1 {
        font-family: 'Poppins';

        font-weight: 500;
        font-size: 32px;
        line-height: 140%;

        color: #FFFFFF;
      }

      fieldset{
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

          color: #C4C4CC;
        }

        input {  
          height: 48px;
          font-weight: 400;
          font-size: 16px;
          line-height: 100%;
          padding: 0 14px;
          border: 1px solid #FFFFFF;
          border-radius: 5px;
          background: transparent;

          color: #FFFFFF;

          &::placeholder {
            font-family: 'Roboto';
            font-weight: 400;
            font-size: 16px;
            line-height: 100%;

            color: #7C7C8A;
          }
        }

      }
     
        button {
        width: 100%;;
        padding: 12px 32px;
 
        background: #750310;
        border-radius: 5px;

        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;

        color: #FFFFFF;
        border: none;
      }

      a{
        background-color: transparent;
        color: #fff;
        
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
      }
    }
  }

  @media (max-width: 657px) {
  > section {
    flex-direction: column;
    justify-content: center;
    gap: 73px ;
    height: 100%;

    form {
      background: none;
      padding: 0 64px ;

      h1 {
        display: none;
      }

      fieldset {
        input {
          border: none;
          background-color: #0D1D25;
        }
      } 
    }
  }
}
`;
