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
    color: #252422;
    background-color:rgb(255, 254, 252);
    border-left: 1px solid #d4d2d2;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items: center;
  }
  .options-entered{
    margin-top: 12rem;
    list-style-type: none;
  }
  #remove-h4{
    color: #E75A7C;
  }
  .options-entered h4{
    text-align: center;
    margin-bottom: .5rem;
  }

  #form-text-h1{
    margin-top: 10rem;
  }

  #form-text-h4{
    color: #E75A7C;
  }
 
  input, select{
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
    cursor: pointer;
    margin-top: 1rem;
    height: 3rem;
    width: 310px;
    padding: 13px;
    font-size: 1.4rem;
    border-radius: 3px;
    background-color: #d5adc8;
    background-image: linear-gradient(315deg, #d5adc8 0%, #ff8489 74%);
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

  input[type='button']:hover{
    cursor: pointer;
    background-color: pink;
    transition: ease-in-out 0.5s;
    color: #ffff;
  }
  /* errors */
  .error-message, .food-error{
    margin-top:1rem;
    color: #E75A7C;
  }
  #food-error{
    visibility: hidden;
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
