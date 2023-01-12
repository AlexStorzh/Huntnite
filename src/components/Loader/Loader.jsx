import React, { useEffect, useState } from "react";
import style from "./Loader.module.scss";
const Loader = () => {
  useEffect(() => {
    addNumbers();
  }, []);
  let [loading, setLoading] = useState(0);

  let addNumbers = () => {
    setInterval(
      () => setLoading(loading + Math.floor(Math.random() * 100)),
      100
    );
  };
  return (
    <div className={style.loader_wrapper}>
      <div className={style.loader_inner}>
        <div className={style.loading}>Loading...</div>
        <div className={style.numbers}>{loading} %</div>
      </div>
    </div>
  );
};

export default Loader;
