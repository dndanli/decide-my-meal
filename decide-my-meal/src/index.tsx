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
    padding-left: 12rem;
    padding-right: 12rem;
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

  .instructions, .form-section{
    min-height: 90vh;
  }
  .instructions{
    background-color: pink;
    width: 40%;
    padding: 1rem;
  }
  .instructions li{
    list-style-type: none;
  }

  .form-section{
    background-color: lightskyblue;
    width: 70%;
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
