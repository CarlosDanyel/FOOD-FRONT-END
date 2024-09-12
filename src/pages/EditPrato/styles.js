import styled from "styled-components";

export const Container = styled.main`
width: 100%;

  section {
    max-width: 1120px;
    width: 90%;
    margin: 0 auto;

    > a {
      margin-top: 40px;

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
    }
  }
`
export const ContainerEdicao = styled.div`
  margin: 0  0 116px 0;

  h1 {
    font-family: 'Poppins';

    font-weight: 500;
    font-size: 32px;
    line-height: 140%;

    color: #E1E1E6;
    margin-bottom: 32px;
  }

   @media(max-width: 914px) {
      margin: 0  0 30px 0 !important;
   }
`
export const FormContainer = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 32px;

  div {
    display: flex;
    gap: 32px;

    fieldset {
      border: none;

      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 16px;

      label {
        font-family: 'Roboto';

        font-weight: 400;
        font-size: 16px;
        line-height: 100%;

        color: #C4C4CC;
      }

      > div {
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
        gap: 16px;
        padding: 8px;

        background: #0D161B;
        border-radius: 8px;

        span {
          padding: 8px 16px;

          background: #76797B;
          border-radius: 8px;

          display: flex;
          align-items: center;
          gap: 8px;

         button {
          display: flex;
          align-items: center;
          border: none;
          background-color: transparent;
          color: #ffffff;
         }
        }

        .containerAddIng{
            width: 135px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 0;

            border: 1px dashed #7C7C8A;
            border-radius: 8px;
            padding-right: 16px;

           input {
            width: 100px;
            height: 100%;
            padding: 10px 16px;
            font-family: "Roboto", sans-serif;

            font-weight: 400;
            font-size: 16px;
            line-height: 100%;
            
            color: #ffffff;

            &::placeholder {
             
            font-family: 'Roboto';
            
            font-weight: 400;
            font-size: 16px;
            line-height: 100%;

            color: #7C7C8A;
            }
          }

          button {
            display: flex;
            align-items: center;
            background-color: transparent;
            border: none;
            color: #7C7C8A;
          }

       
        }
      }

      input {
        display: flex;
        height: 100%;

        justify-content: center;
        align-items: center;
        padding: 12px 14px;
        gap: 14px;

        background: #0D161B;

        border-radius: 8px;
        border: none;
        color: #ffffff;

        &::placeholder {
          font-family: 'Roboto';

          font-weight: 400;
          font-size: 16px;
          line-height: 100%;

          color: #7C7C8A;
        }
      }

      textarea{
        padding: 14px;
        height: 172px;

        background: #0D161B;
        border-radius: 8px;
        border: none;

        font-family: 'Roboto';
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;

        color: #ffffff;

        &::placeholder {
          font-family: 'Roboto';

          font-weight: 400;
          font-size: 16px;
          line-height: 100%;

          color: #7C7C8A;
        }
      }
    }

    .fileContainer{
     width: 229px;
     flex: none;
  
     div {
      position: relative;
      display: flex;

      background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.2929 0.292893C11.6834 -0.0976311 12.3166 -0.0976311 12.7071 0.292893L17.9571 5.54289C18.3476 5.93342 18.3476 6.56658 17.9571 6.95711C17.5666 7.34763 16.9334 7.34763 16.5429 6.95711L12 2.41421L7.45711 6.95711C7.06658 7.34763 6.43342 7.34763 6.04289 6.95711C5.65237 6.56658 5.65237 5.93342 6.04289 5.54289L11.2929 0.292893Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 1.49012e-08C12.5523 1.49012e-08 13 0.447715 13 1V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V1C11 0.447715 11.4477 1.49012e-08 12 1.49012e-08Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1 14C1.55228 14 2 14.4477 2 15V22H22V15C22 14.4477 22.4477 14 23 14C23.5523 14 24 14.4477 24 15V22C24 22.5304 23.7893 23.0391 23.4142 23.4142C23.0391 23.7893 22.5304 24 22 24H2C1.46957 24 0.960861 23.7893 0.585787 23.4142C0.210714 23.0391 0 22.5304 0 22V15C0 14.4477 0.447715 14 1 14Z' fill='white'/%3E%3C/svg%3E%0A");
      background-repeat: no-repeat;
      background-position: 32px center;
      cursor: pointer;

      input {
        position: absolute;
        top: 0;
        width: 100%;
        height: 48px;

        opacity: 0;
        max-width: none;
        cursor: pointer;
      }

      span {
        padding-left: 64px;
        white-space: nowrap;
        background-color: transparent;
      }
     }
    }

    .containerPreco {
      flex: none;
      width: 251px;
    }

    select{
      width: 364px;
     appearance: none;
     background-image: url("data:image/svg+xml,%3Csvg width='16' height='10' viewBox='0 0 16 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.454505 0.829505C0.893845 0.390165 1.60616 0.390165 2.0455 0.829505L8 6.78401L13.9545 0.829505C14.3938 0.390165 15.1062 0.390165 15.5455 0.829505C15.9848 1.26884 15.9848 1.98116 15.5455 2.4205L8.7955 9.1705C8.35615 9.60983 7.64385 9.60983 7.2045 9.1705L0.454505 2.4205C0.015165 1.98116 0.015165 1.26884 0.454505 0.829505Z' fill='%23C4C4CC'/%3E%3C/svg%3E%0A");
     background-repeat: no-repeat;
     background-position: right 20px center; 


      height: 100%;
    
      padding: 12px 14px;
      gap: 14px;

      background-color: #0D161B;

      border-radius: 8px;
      border: none;
      color: #ffffff;

     option{
      font-family: 'Roboto';

      font-weight: 400;
      font-size: 14px;
      line-height: 160%;

      color: #C4C4CC;
      border-radius: 5px;

     }
   }

   @media(max-width: 914px) {
    flex-direction: column;

    fieldset {
      width: 100% !important;

      input {
        height: 48px;
      }

      > div {
        flex-direction: row !important;
          .containerAddIng{
            flex-direction: row !important;
            height: 100%
          }
      }
    }

    select{
      width: 100%;
      height: 48px;
    }
   }
 }
`
export const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;

   button:nth-child(1) {
    background-color: #0D161B;
  }

  button {
    font-family: 'Poppins';

    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    color: #FFFFFF;

    display: flex;

    justify-content: center;
    align-items: center;
    padding: 12px 24px;
    background: #750310; 
    border-radius: 5px;
    border: none;

    &:disabled{
       background: #AB4D55;
    }
  }

  @media(max-width: 914px) {
    flex-direction: row !important;
    justify-content: space-between;

    button{
      width: 100%;
    }
  }


`