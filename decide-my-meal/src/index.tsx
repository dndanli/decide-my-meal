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
  body{
    /* padding-left: 10%rem;
    padding-right: 12rem; */
    background-color: rgb(255, 254, 252);
  }
  .content-wrapper{
    background-color: #e7e4eb;
    /* all around */
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    font-size: 1.5rem;
  }
  
  .form-section{
    background-color: lightskyblue;
    min-height: 90vh;
    width: 100%;
  }
  .main-form{
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

  
  .user-input{
    height: 1.7rem;
    width: 290px;
    border-radius: 3px;
    padding: 10px;
    margin-bottom:.5rem;
    font-size: 1rem;
  }

  .food-input{
    height: 1.7rem;
    width: 175px;
    border-radius: 3px;
    padding: 10px;
    margin-bottom:.5rem;
    font-size: 1rem;
    margin-right: 7px;
  }
 
  input[type='submit']{
    margin-top: 1rem;
    height: 3rem;
    width: 310px;
    padding: 13px;
    font-size: 1.4rem;
    border-radius: 3px;
  }
  input[type='button']{
    height: 3rem;
    width: 50px;
    padding: 13px;
    border-radius: 3px;
    color: #646464;
    background-color: rgb(255, 254, 252);
  }
  #more-food, #less-food{
    font-size: 1.5rem;
  }
  #more-food{
    margin-right: 7px;
  }

  .food-input-section{
    display: flex;
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
