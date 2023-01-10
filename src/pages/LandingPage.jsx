import React from "react";
import Introduction from "../components/Introduction";
import Navbar from "../components/Navbar";
import style from "../style/LandingPage.module.scss";

const LandingPage = () => {
  return (
    <div className={style.smooth_wrapper}>
      <Navbar />
      <Introduction />
    </div>
  );
};

export default LandingPage;
