import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import DropDown from "./Components/DropDown";
import './Styles/app.scss'

ReactDOM.render(
      <DropDown />, 
      document.querySelector(".dropDownContainer")
      );


      