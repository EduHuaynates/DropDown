import { useCallback, useState, useEffect } from "react";

function useRoveFocus(size) {
  const [currentFocus, setCurrentFocus] = useState(0);

  const handleKeyDown = (e) => {
    if (e.keyCode === 40) {
      setCurrentFocus(currentFocus === size - 1 ? 0 : currentFocus + 1);
    } else if (e.keyCode === 38) {
      setCurrentFocus(currentFocus === 0 ? size - 1 : currentFocus - 1);
    } else {
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [handleKeyDown]);

  return [currentFocus, setCurrentFocus];
}

export default useRoveFocus;
