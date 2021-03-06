import React from "react";
import Option from "./Options";

function optionList({ infoCombo, isVisible, updateFilter }) {
  const data = infoCombo;
  let visibleFlag = isVisible ? "active" : "";
  const optionList = data.map((item, id) => (
    <Option
      key={item.id}
      name={item.name}
      isVisible={item.isVisible}
      updateFilter={updateFilter}
      tabIndex={-1}
      role = 'button'
    />
  ));

  return <div className={`optionContainer ${visibleFlag}`}>{optionList}</div>;
}

export default optionList;
