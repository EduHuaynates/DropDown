import { render } from "@testing-library/react";
import React from "react";
import DropDown from "./DropDown";


class DropDownContainer extends React.Component {
  state = {
    data: [
      { id: "1", name: "Edu", dni: "47202001", idDpto: "a", Dpto: "Lima" },
      { id: "2", name: "Ash", dni: "47202002", idDPto: "b", Dpto: "Junin" },
      { id: "3", name: "Lyn", dni: "47202003", idDPto: "a", Dpto: "Lima" },
      { id: "4", name: "Gaturin", dni: "47202004", idDPto: "c", Dpto: "Pasco" },
    ],

    employees: [
      { id: "1", name: "EDU", dni: "47202001" , isVisible: true },
      { id: "2", name: "ASH", dni: "47202002", isVisible: true },
      { id: "3", name: "LYN", dni: "47202003", isVisible: true },
      { id: "4", name: "GATURIN", dni: "47202004" , isVisible: true},
    ],

    departamento: [
      { idDpto: "a", name: "Lima" },
      { idDpto: "b", name: "Junin" },
      { idDpto: "c", name: "Pasco" },
    ],
  };

  render(){

    return(
        <DropDown 
        data = {this.state.employees} 
        />
    )
}

  
}

export default DropDownContainer;
