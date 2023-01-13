import React from "react";
import style from "./Introduction.module.scss";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
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

const Introduction = () => {
  const { t, i18n } = useTranslation();
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className={style.introduction}
    >
      <motion.p
        custom={1}
        variants={textAnimation}
        className={style.introduction_text}
      >
        {t("introduction")}
      </motion.p>

      <Marquee speed={150} gradient={false} className={style.scroller}>
        <div>HUNTNITE</div>
        &bull;
        <div>RECRUITMENT AGENCY</div>
        &bull;
      </Marquee>
    </motion.div>
  );
};

export default Introduction;
