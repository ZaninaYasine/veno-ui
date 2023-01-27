import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@media (prefers-color-scheme: light) {
  :root{
    --bg: #ffffff;

    --primary: #ffbe0b;
    --primary-contrast: #023047;
    
    --secondary: #f1f1f1;
    --secondary-contrast: #2C2C2C;
  }
}

@media (prefers-color-scheme: dark) {
  :root{
    --bg: #141414;

    --primary: #ffbe0b;
    --primary-contrast: #023047;
    
    --secondary: #2C2C2C;
    --secondary-contrast: #f1f1f1;
  }
}
  :root{
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
    background-color: var(--bg);
    font-size: 14px;
    *{
      line-height: 1rem;
      font-family: 'General Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
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
