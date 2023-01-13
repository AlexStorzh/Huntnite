import React from "react";
import style from "./Process.module.scss";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const textAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Process = () => {
  const { t, i18n } = useTranslation();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className={style.process}
    >
      <div className={style.process_body}>
        <motion.p custom={1} variants={textAnimation}>
          {t("process.title")}
        </motion.p>
        <div className={style.process_cards}>
          <div>
            <p>01</p>
            <h1>{t("process.block1.title")}</h1>
            <motion.span custom={3} variants={textAnimation}>
              {t("process.block1.text")}
            </motion.span>
          </div>
          <div>
            <p>02</p>
            <h1>{t("process.block2.title")}</h1>
            <motion.span custom={3} variants={textAnimation}>
              {t("process.block2.text")}
            </motion.span>
          </div>
          <div>
            <p>03</p>
            <h1>{t("process.block3.title")}</h1>
            <motion.span custom={3} variants={textAnimation}>
              {t("process.block3.text")}
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Process;
