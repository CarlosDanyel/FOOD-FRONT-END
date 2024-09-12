import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #000A0F;
    color: #FFFFFF;
    -webkit-font-smoothing: antialiased;
   
  }

  body, input, button, a {
      font-family: "Poppins", sans-serif;
  }

  button, a {
    cursor: pointer;
    text-decoration: none;
  }

  .layoutApp{
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  }

  .sr-only {
	border: 0 !important;
	clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
	-webkit-clip-path: inset(50%) !important;
		clip-path: inset(50%) !important;  /* 2 */
	height: 1px !important;
	margin: -1px !important;
	overflow: hidden !important;
	padding: 0 !important;
	position: absolute !important;
	width: 1px !important;
	white-space: nowrap !important;            /* 3 */
}

  .swiper-button-prev, .swiper-button-next{
    color: #fff;
    display: flex;
  }

 .mySwiper{
  position: relative;

    &::after {
      content: "";

      position: absolute;
      pointer-events: none;
      width: 224px;
      height: 448px;
      left: -2px;
      top: 0px;
      background: linear-gradient(
        90deg,
        rgba(0, 10, 15, 0.272541) 0%,
        #000a0f 100%
      );
      transform: matrix(-1, 0, 0, 1, 0, 0);
      z-index: 2;
    }

    &::before {
      content: "";

      position: absolute;
      pointer-events: none;
      width: 224px;
      height: 448px;
      right: -2px;
      top: 0px;

      z-index: 2;

      background: linear-gradient(
        90deg,
        rgba(0, 10, 15, 0.272541) 0%,
        #000a0f 100%
      );
      transform: matrix(1, 0, 0, -1, 0, 0);
    }
 }

`;
