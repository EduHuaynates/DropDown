import React,{useRef} from "react";

// import styles from '../Styles/Option.module.css'

class Option extends React.Component {
  handleInputValue = (e) => {
    this.props.updateFilter(e.target.innerText);
    // this.props.updateInputValue(e.target.innerText);
    console.log(e.target.innerText);
  };

  handleKeyPress = (e) => {
    if(e.keyCode == 38){
      console.log( e.target);
    }

    // console.log(e.keyCode);
  };

  render() {
    const isVisible = this.props.isVisible ? "option" : "optionInactive";
    return (
      <div
        tabIndex={this.props.tabIndex} 
        className={`${isVisible}`}
        onClick={this.handleInputValue}
        onKeyUp={this.handleKeyPress}
      >
        {this.props.name}
      </div>
    );
  }
}

export default Option;
