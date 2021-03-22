import React from "react";
import arrow from "../img/arrow-down.svg";

function searchBox({
  updateList,
  toggleVisibleList,
  inputValue,
  updateFilterOnKeyPress,
  isVisible,
}) {
  const UpdateFocus = (e) => {
    if (e.keyCode === 13) {
      updateFilterOnKeyPress(true);
    } else if (!isVisible && (e.keyCode === 38 || e.keyCode === 40)) {
      updateFilterOnKeyPress();
    }
  };

  const handleUpdateSubmit = (e) => {
    updateList(e.target.value.toUpperCase());
    if (e.target.value.toUpperCase() === "") {
      toggleVisibleList(false);
    } else {
      toggleVisibleList(true);
    }
  };

  const handleVisibleList = () => {
    toggleVisibleList();
  };

  return (
    <div className="searchBox">
      <input
        onKeyDown={UpdateFocus}
        onChange={handleUpdateSubmit}
        className="inputText"
        type="text"
        placeholder="Select a value..."
        value={inputValue}
      />
      <button className="list-button" onClick={handleVisibleList}>
        <img src={arrow} alt="" />
      </button>
    </div>
  );
}

export default searchBox;
