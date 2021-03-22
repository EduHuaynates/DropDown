import React, { useState } from "react";
import DropDown from "./DropDown";
import infor from "../data";

function DropDownContainer() {
  const [info, SetInfo] =useState( infor ) ;
  
  return (
  <div>
    <DropDown data={info.data} />
    {/* <DropDown data={info.dpto} /> */}
  </div>)
}
export default DropDownContainer;