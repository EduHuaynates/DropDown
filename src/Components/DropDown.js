import React, { useState } from "react";
import OptionList from "./OptionList";
import SearchBox from "./SearchBox";
import useRoveFocus from "../helpers/useRoveFocus";

function DropDown({ data }) {
  const [option, setOption] = useState(data);
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("");
  const [listLength, setListLength] = useState(option.length);

  const [focus, setFocus] = useRoveFocus(listLength);
  const updateList = (filter) => {
    let lista = -1;
    const newList = option.map((obj, id) => {
      const label = obj.name;
      if (label.indexOf(filter) != -1) {
        lista++;
        return Object.assign({}, obj, { isVisible: true, focusOrder: lista });
      } else {
        return Object.assign({}, obj, { isVisible: false, focusOrder: "-1" });
      }
    });

    setOption(newList);
    updateFilter(filter);
    setListLength(lista + 1);
  };

  const updateFilterOnKeyPress = (param) => {
    const focusedName = option.filter((opt) => {
      return opt.focusOrder == focus;
    });
    updateFilter(focusedName[0].name);
    if (param) {
      toggleVisibleList();
    }
  };

  const updateFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const toggleVisibleList = (flag) => {
    if (flag) {
      setIsVisible(flag);
    } else {
      setIsVisible(!isVisible);
    }
  };

  return (
    <div className="dropDownWrapper">
      <SearchBox
        updateList={updateList}
        toggleVisibleList={toggleVisibleList}
        inputValue={filter}
        setFocus={setFocus}
        listLength={listLength}
        updateFilterOnKeyPress={updateFilterOnKeyPress}
        isVisible={isVisible}
      />
      <OptionList
        infoCombo={option}
        isVisible={isVisible}
        updateFilter={updateFilter}
        toggleVisibleList={toggleVisibleList}
        optionFocus={focus}
      />
    </div>
  );
}

export default DropDown;
