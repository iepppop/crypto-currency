import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    width:100%;
    height: 100%;
    background-color #222126;
  }

  canvas {
    touch-action: none;
    display: block;
    max-width:100%;
    height:100%;
    position:relatvie;
    z-index:2;
  }
  
  .annotation {
    cursor: pointer;
    outline: none;
    border: none;
    font-size: 8px;
    font-weight: 300;
    background: black;
    color: #f0f0f0;
    padding: 2px 10px;
    border-radius: 20px;
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  
`;

export default GlobalStyle;