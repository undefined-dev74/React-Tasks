import React from "react";
import "./App.css";

const UserInput = ({
  handleInputChange,
  getUpdateText,
  onButtonClick,
  inputValue,
}) => {
  return (
    <div className="container">
      <h1>{getUpdateText}</h1>

      <form
        action=""
        onSubmit={
          // ? preventing Form default behaviour
          (e) => e.preventDefault()
        }
      >
        <input
          className="inputBox"
          onChange={handleInputChange}
          type="text"
          placeholder="Please type a message"
          value={inputValue}
        />
        <button className="buttonPrimary" onClick={onButtonClick}>
          Change Text
        </button>
      </form>
    </div>
  );
};

export default UserInput;
