import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import DropDown from "./Components/DropDown";
import DropDownContainer from "./Components/DropDownContainer";
import './Styles/app.scss'

ReactDOM.render(
      <DropDownContainer />, 
      document.querySelector(".dropDownContainer")
      );


      