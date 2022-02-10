import React, { useState } from "react";

const MainForm = () => {
  return (
    <div className="wrapper">
      <div className="form-content">
        <h1 id="form-text-h1">Welcome</h1>
        <h4 id="form-text-h4">please fill the form bellow</h4>
        <input type="text" placeholder="City" />
        <input type="text" placeholder="State" />
        <div className="food-input-wrapper">
          <input type="text" placeholder="Food" id="food-input" />
          <input type="button" id="add-button" value="+" />
        </div>
        <input type="submit" />
        <form></form>
      </div>

      <div className="result-content"></div>
    </div>
  );
};
export default MainForm;
