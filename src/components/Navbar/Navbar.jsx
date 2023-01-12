import React, { useState, useEffect } from "react";
import style from "./Navbar.module.scss";
import logo from "../../images/image_2023-01-06_16-43-30.svg";

const Navbar = () => {
  let [data, setData] = useState(new Date());
  let currentTime = data.toLocaleTimeString();
  useEffect(() => {
    setInterval(() => setData(new Date()), 1000);
  }, []);
  let scrollToBot = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  let scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <header className={style.navigation}>
      <img onClick={scrollToTop} src={logo} alt="" />

      <div className={style.timer}>
        <span>Kiyv, UA </span>
        <span>{currentTime}</span>
      </div>
      <div className={style.links}>
        <p onClick={scrollToBot}> &gt; Contact</p>
      </div>
    </header>
  );
};

export default Navbar;
