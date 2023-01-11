import React, { useState, useEffect } from "react";
import style from "./Navbar.module.scss";
import logo from "../../images/image_2023-01-06_16-43-30.svg";

const Navbar = () => {
  let [data, setData] = useState(new Date());
  let currentTime = data.toLocaleTimeString();
  useEffect(() => {
    setInterval(() => setData(new Date()), 1000);
  }, []);
  return (
    <div className={style.navigation}>
      <img src={logo} alt="" />

      <div className={style.timer}>
        <span>Kiyv, UA </span>
        <span>{currentTime}</span>
      </div>
      <div className={style.links}>
        <p> &gt; Contact</p>
      </div>
    </div>
  );
};

export default Navbar;
