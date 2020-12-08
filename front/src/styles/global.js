import {createGlobalStyle} from  'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: auto;
    min-height: 100vh;
  }
  h1, h2, h3, h4, h5, a, input, label, button, table, tr, td {
    font-family: 'Baloo 2', cursive;
  }
  a {
      text-decoration: none;
      color: #fff;
  }
  body {
    font: 14px 'Baloo 2', cursive;
    background: #FFF;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
      background: #faa61a;
    }
  }
  ul {
    list-style: none;
  }
  button {
      cursor: pointer;
  }
  .Toastify__toast {
    border-radius: 5px;
    font-weight: bold;
  }
  .Toastify__toast--success {
    background: #3aa281;
  }
  .Toastify__toast--warning {
    background: #faa61a;
    color: #1f232b;
}
`;