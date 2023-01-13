import React from "react";
import style from "./DropdownMenu.module.scss";
import { useState } from "react";
const DropdownMenu = ({ setIsVisible, isVisible }) => {
  let showMenu = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="dropdown" onClick={showMenu}>
      {!isVisible ? (
        <div className={style.dropdown}>
          <hr width="20px" size="3" />
          <hr width="20px" size="3" />
          <hr width="20px" size="3" />
        </div>
      ) : (
        <div className={style.dropdown_active}>
          <hr width="20px" size="3" />
          <hr width="20px" size="3" />
          <hr width="20px" size="3" />
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
