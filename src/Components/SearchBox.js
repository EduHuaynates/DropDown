import React from "react";
import arrow from "../img/arrow-down.svg";
// import styles from "../Styles/SearchBox.module.css";

class searchBox extends React.Component {
  handleUpdateSubmit = (e) => {
    this.props.updateList(e.target.value.toUpperCase());
  };

  handleVisibleList = () => {
    this.props.toggleVisibleList();
  };

  handleKeyPress = (e) => {
    console.log(e.keyCode);
  };

  render() {
    return (
      <div className="searchBox">
        <input
          onChange={this.handleUpdateSubmit}
          className="inputText"
          type="text"
          placeholder="Select a value..."
          value={this.props.inputValue}
          onKeyUp={this.handleKeyPress}
        />
        <button className="list-button" onClick={this.handleVisibleList}>
          <img src={arrow} alt="" />
        </button>
      </div>
    );
  }
}

export default searchBox;
