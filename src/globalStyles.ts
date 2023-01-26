import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    font-size: 13px;

    --primary: #F5CC00;
    --primary-contrast: #222222;
    
    --secondary: #2C2C2C;
    --secondary-contrast: #F1F1F1;

    --border: 1px solid rgba(85, 85, 85, 0.17);

    --success: #27cf5f;
    --warning: #f5a907;
    --danger: #d42954;

    --radius-xs: 3px;
    --radius-s: 5px;
    --radius-m: 7px;
    --radius-l: 11px;
    --radius-xl: 15px;
    --radius-full: 72px;
  }
  

  html, body {
    background-color: #141414;
    font-size: 1rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: 0;
    list-style: none;
    font-size: 1rem;

    button, a {
        cursor: pointer;
    }
  }
`;

export default GlobalStyle;
