import styled from "styled-components";

export const ContainerFooter = styled.footer`
  padding: 23px 0;
  background-color: #00111a;
  margin-top: 48px;

  > div {
    width: 95%;

    max-width: 1120px;
    margin: 0 auto 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;

    > img {
      height: 30px;

      @media (max-width: 508px) {
        height: 18px;
      }
    }

    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;

      color: #fffaf1;
    }
  }
`;
