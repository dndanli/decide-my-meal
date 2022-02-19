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
    color: white; 
    background-color: #1a206d;
    background-image: linear-gradient(326deg, #1a206d 0%, #333888 74%);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .result-content{
    flex: 1;
    background-color:#e4e9f3;
    color: #a4508b;
    border-left: 1px solid #d4d2d2;
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items: center;
    overflow: auto;
  }
  .options-entered{
    margin-top: 12rem;
    list-style-type: none;
  }
  #remove-h2{
    color: #a4508b;
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
    color: #f66d9f;
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
    height: 3.5rem;
    width: 345px;
    padding: 13px;
    font-size: 1.8rem;
    border-radius: 3px;
  background-color: #6e72fc;
  background-image: linear-gradient(315deg, #6e72fc 0%, #ad1deb 74%);
    color:rgb(255,254,252);
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
    border: 1px solid gray;
    color: #6e72fc;
    margin-left: 10px;
    background-color: rgba(255, 254, 252);
  }

  input[type='button']:hover{
    border:1px solid rgb(255, 254, 252);
    cursor: pointer;
    background-color: #6e72fc;
    background-image: linear-gradient(315deg, #6e72fc 0%, #ad1deb 74%);
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

  @media screen and (max-width: 1200px){
    .wrapper{
      flex-direction:column;
    } 

    .form-content{
      min-height: 80vh;
    }

    #form-text-h1{
      font-size:3rem;
    }

    #form-text-h4{
      font-size:1.3rem;
    }

    input[type='text']{
      width:270px;
    }

    input[type='submit']{
      width:290px;
    }

    #food-input{
      width:205px;
    }
  }
  
  @media screen and (max-height: 750px){
    
    input[type='submit']{
      width:290px;
      margin-bottom:1.5rem;
    }

    #food-input{
      width:205px;
    }
  
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
