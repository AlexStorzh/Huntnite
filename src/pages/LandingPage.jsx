import React from "react";
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";
import Info from "../components/Info/Info";
import Introduction from "../components/Introduction/Introduction";
import Navbar from "../components/Navbar/Navbar";
import Process from "../components/Process/Process";
import style from "../style/LandingPage.module.scss";

const LandingPage = () => {
  return (
    <div className={style.smooth_wrapper}>
      <Navbar />
      <Introduction />
      <Info />
      <Process />
      <Contacts />
      <Footer />
    </div>
  );
};

export default LandingPage;
