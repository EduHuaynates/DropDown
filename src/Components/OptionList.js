import React from "react";
import Option from "./Options";

class optionList extends React.Component {
  render() {
    const data = this.props.infoCombo;
    let visibleFlag = this.props.isVisible ? "active" : "";
    const optionList = data.map((item,id) => (
      <Option
        key={item.id}
        name={item.name}
        isVisible={item.isVisible}
        updateFilter={this.props.updateFilter}
        tabIndex={id}
      />
    ));

    return <div className={`optionContainer ${visibleFlag}`}>{optionList}</div>;
  }
}

export default optionList;
