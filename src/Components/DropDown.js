import React , {useState} from "react";
import OptionList from "./OptionList";
import SearchBox from "./SearchBox";


function DropDown({data}) {
  const [emp, setEmp] = useState( data )     
  const [isVisible,setIsVisible] = useState(false)
  const [filter,setFilter] = useState('')

  const updateList = (filter) => {
    filter = filter.toUpperCase();
    const newList = emp.map((obj , id) => {
      const label = obj.name;
      // console.log(obj ,id)
      if (label.indexOf(filter) != -1) {
        return Object.assign({}, obj, { isVisible: true });
      } else {
        return Object.assign({}, obj, { isVisible: false });
      }
    }
    );

    setEmp(newList );
    updateFilter(filter);
  };

  const updateFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const toggleVisibleList = () => {
    setIsVisible(!isVisible );
  };

  return (<div className="dropDownWrapper">
  <SearchBox
    updateList={updateList}
    toggleVisibleList={toggleVisibleList}
    inputValue={filter}
  />
  <OptionList
    infoCombo={emp}
    isVisible={isVisible}
    updateFilter={updateFilter}
  />
</div>);
}


export default DropDown;
