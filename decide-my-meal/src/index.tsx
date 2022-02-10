import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  } 
  
  @font-face {
  font-family: 'Montserrat';
  src: url('Montserrat.eot');
  src: url('Montserrat.eot?#iefix') format('embedded-opentype'), 
    url('Montserrat.woff2') format('woff2'), 
    url('Montserrat.woff') format('woff'), 
  }
 
  .wrapper{
    display: flex;
    font-family: Montserrat, sans-serif;
  }

  .form-content, .result-content{
    min-height: 100vh;
  }
  .form-content{
    flex: 1;
    color: #252422;
    background-color: rgb(255, 254, 252);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .result-content{
    flex: 1;
    background-color: #252422;
    color:rgb(255, 254, 252);
  }


  #form-text-h1{
    margin-top: 10rem;
  }

  #form-text-h4{
    color: #E75A7C;
  }
 
  input{
    border:none;
    appearance: none;
    -webkit-appearance: none;
    -ms-appearance:none;
    -moz-appearance: none;
    outline: none;
  }
  input:focus::placeholder{
    color: transparent;
  }
  input::placeholder{
    color:#646464;
    transition: color 0.2s ease;
  }
  input[type='text']{
    margin-top: 1rem;
    height: 1.2rem;
    width: 280px;
    padding: 13px;
    font-size: 1.2rem;
    border-radius: 3px;
    border: 1px solid #b1afaf;
  }
  #food-input{
    margin-top: 1rem;
    height: 1.2rem;
    width: 217px;
    padding: 13px;
    font-size: 1.2rem;
    border-radius: 3px;
    border: 1px solid #b1afaf;
  }

  input[type='submit']{
    margin-top: 1rem;
    height: 3rem;
    width: 310px;
    padding: 13px;
    font-size: 1.4rem;
    border-radius: 3px;
    background-color: #252422;
    color: rgba(255, 254, 252);
  }

  .food-input-wrapper{
    display: flex;
  }
  input[type='button']{
    margin-top: 1rem;
    height: 3rem;
    width: 50px;
    padding: 13px;
    font-size: 1.2rem;
    border-radius: 3px;
    border: 1px solid #E75A7C;
    color: #E75A7C;
    margin-left: 10px;
    background-color: rgba(255, 254, 252);
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
