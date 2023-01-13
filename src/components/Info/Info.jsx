import React from "react";
import style from "./Info.module.scss";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
};

const Info = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={style.info}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className={style.info_body}
      >
        <motion.p custom={1} variants={textAnimation}>
          {t("info.title")}
        </motion.p>
        <ul>
          <motion.li custom={4} variants={textAnimation}>
            {t("info.info1")}
          </motion.li>
          <motion.li custom={5} variants={textAnimation}>
            {t("info.info2")}
          </motion.li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Info;
