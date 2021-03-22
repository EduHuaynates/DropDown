import React from "react";
import Option from "./Options";

function OptionList({
  infoCombo,
  isVisible,
  updateFilter,
  toggleVisibleList,
  optionFocus,
}) {
  // const [focus, setFocus] = useRoveFocus(listLength);

  // const data = infoCombo;
  let visibleFlag = isVisible ? "active" : "";
  // const optionListFiltered = data.filter( option => option.isVisible === true)
  const optionList = infoCombo.map((item, index) => (
    
    <Option
      key={item.id}
      name={item.name}
      isVisible={item.isVisible}
      updateFilter={updateFilter}
      index={item.focusOrder}
      // focus={optionFocus === item.focusOrder}
      // setFocus={setFocus}
      toggleVisibleList={toggleVisibleList}
      optionFocus={optionFocus}
      // setFocusedValue={setFocusedValue}
    />
  ));

  return <div className={`optionContainer ${visibleFlag}`}>{optionList}</div>;
}

export default OptionList;
