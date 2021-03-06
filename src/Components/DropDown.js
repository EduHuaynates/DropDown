import React from "react";
import OptionList from "./OptionList";
import SearchBox from "./SearchBox";

class dropDown extends React.Component {
  state = {
    data: [
      { id: "1", name: "EDU", isVisible: true },
      { id: "2", name: "ASH", isVisible: true },
      { id: "3", name: "LYN", isVisible: true },
      { id: "4", name: "GATURIN", isVisible: true },
    ],
    isVisible: false,
    filter: "",
  };

  updateList = (filter) => {
    // filter = filter.toLowerCase();
    const newList = this.state.data.map((obj , id) => {
      const label = obj.name;
      // console.log(obj ,id)
      if (label.indexOf(filter) != -1) {
        return Object.assign({}, obj, { isVisible: true });
      } else {
        return Object.assign({}, obj, { isVisible: false });
      }
    });

    this.setState({ data: newList });
    // this.setState({ filter: filter });
    this.updateFilter(filter);
  };

  updateFilter = (newFilter) => {
    this.setState({ filter: newFilter });
  };

  toggleVisibleList = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  // updateInputValue = (newInputValue) => {
  //   this.setState({ inputValue: newInputValue });
  // };

  render() {
    return (
      <div className="dropDownWrapper">
        <SearchBox
          // updateFilter={this.updateFilter}
          updateList={this.updateList}
          toggleVisibleList={this.toggleVisibleList}
          inputValue={this.state.filter}
          // updateInputValue={this.updateInputValue}
        />
        <OptionList
          infoCombo={this.state.data}
          isVisible={this.state.isVisible}
          updateFilter={this.updateFilter}
          // updateInputValue={this.updateInputValue}
        />
      </div>
    );
  }
}

export default dropDown;
