import React from "react";
import style from "../style/Introduction.module.scss";
import { motion } from "framer-motion";

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
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className={style.introduction}
    >
      <motion.div
        custom={1}
        variants={textAnimation}
        className={style.introduction_text}
      >
        A recruitment agency HUNTNITE is a business that is hired by companies
        and organisations to find suitable employees. Employers outsource
        recruitment because it takes a lot of resources and not everyone has the
        expertise to find and recruit the best talent themselves.
      </motion.div>
      <div className={style.scroller}>
        <div>HUNTNITE &bull; RECRUITMENT AGENCY</div>

        <div></div>
      </div>
    </motion.div>
  );
};

export default Introduction;
