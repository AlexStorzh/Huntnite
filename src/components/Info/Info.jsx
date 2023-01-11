import React from "react";
import style from "./Info.module.scss";
import { motion } from "framer-motion";

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
  return (
    <div className={style.info}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className={style.info_body}
      >
        <motion.p custom={1} variants={textAnimation}>
          Info
        </motion.p>
        <ul>
          <motion.li custom={4} variants={textAnimation}>
            A recruitment agency HUNTNITE is a business that is hired by
            companies and organisations to find suitable employees. Employers
            outsource recruitment because it takes a lot of resources and not
            everyone has the expertise to find and recruit the best talent
            themselves.
          </motion.li>
          <motion.li custom={5} variants={textAnimation}>
            A recruitment agency HUNTNITE is a business that is hired by
            companies and organisations to find suitable employees. Employers
            outsource recruitment because it takes a lot of resources and not
            everyone has the expertise to find and recruit the best talent
            themselves.
          </motion.li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Info;
