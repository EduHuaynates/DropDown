import React, { useEffect, useRef, useCallback } from "react";
import classNames from "classnames";

function Option({
  name,
  isVisible,
  updateFilter,
  index,
  toggleVisibleList,
  optionFocus,
}) {
  const optionClass = classNames({
    option: isVisible,
    optionInactive: !isVisible,
    optionFocused: isVisible & (index === optionFocus),
  });

  const handleSelect = (e) => {
    toggleVisibleList();
    updateFilter(e.target.innerText);
  };
  return (
    <div className={optionClass} onClick={handleSelect}>
      {name}
    </div>
  );
}
export default Option;
