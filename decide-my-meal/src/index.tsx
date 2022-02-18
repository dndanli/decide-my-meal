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
    background-color:rgb(255, 254, 252);
    color: #212121;
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
    color: rgb(255, 254, 252);
  }
  .options-entered h4{
    text-align: center;
    margin-bottom: .5rem;
  }

  #form-text-h1{
    font-size: 4rem;
    margin-top: 10rem;
  }

  #form-text-h4{
    font-size: 1.6rem;
    color: #ff9761;
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
    width:320px;
    padding: 13px;
    font-size: 1.2rem;
    border-radius: 3px;
    border: 1px solid #b1afaf;
  }
  #food-input{
    margin-top: 1rem;
    height: 1.2rem;
    width: 260px;
    padding: 13px;
    font-size: 1.2rem;
    border-radius: 3px;
    border: 1px solid #b1afaf;
  }

  input[type='submit']{
    cursor: pointer;
    margin-top: 1rem;
    height: 3rem;
    width: 345px;
    padding: 13px;
    font-size: 1.4rem;
    border-radius: 3px;
    background-color #ffac81;
    background-image linear-gradient(315deg, #ffac81 0%, #ff928b 74%);
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
    border: 1px solid #ff9761;
    color: #E75A7C;
    margin-left: 10px;
    background-color: rgba(255, 254, 252);
  }

  input[type='button']:hover{
    border:1px solid rgb(255, 254, 252);
    cursor: pointer;
    background-color #ffac81;
    background-image linear-gradient(315deg, #ffac81 0%, #ff928b 74%);
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
