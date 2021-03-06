import React from "react";
import arrow from "../img/arrow-down.svg";

function searchBox({ updateList, toggleVisibleList, inputValue }) {
  const handleUpdateSubmit = (e) => {
    updateList(e.target.value.toUpperCase());
    console.log(e.target.value.toUpperCase());
  };

  const handleVisibleList = () => {
    toggleVisibleList();
  };

  // const handleKeyPress = (e) => {
  //   console.log(e.keyCode);
  // };

  return (
    <div className="searchBox">
      <input
        onChange={handleUpdateSubmit}
        className="inputText"
        type="text"
        placeholder="Select a value..."
        value={inputValue}
        // onKeyUp={handleKeyPress}
      />
      <button className="list-button" onClick={handleVisibleList}>
        <img src={arrow} alt="" />
      </button>
    </div>
  );
}

export default searchBox;
