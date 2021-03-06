import React, { useEffect } from "react";

function Option({ name, isVisible, updateFilter, tabIndex }) {
  const handleInputValue = (e) => {
    updateFilter(e.target.innerText);
    console.log(e.target.innerText);
  };

  return (
    <div
      tabIndex={tabIndex}
      className={isVisible ? "option" : "optionInactive"}
      onClick={handleInputValue}
    >
      {name}
    </div>
  );
}
export default Option;
