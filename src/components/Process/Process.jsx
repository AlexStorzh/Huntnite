import React from "react";
import style from "./Process.module.scss";
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

const Process = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className={style.process}
    >
      <div className={style.process_body}>
        <motion.p custom={1} variants={textAnimation}>
          Process
        </motion.p>
        <div className={style.process_cards}>
          <div>
            <p>01</p>
            <h1>Identify</h1>
            <motion.span custom={3} variants={textAnimation}>
              A recruitment agency HUNTNITE is a business that is hired by
              companies and organisations to find suitable employees. Employers
              outsource recruitment because it takes a lot of resources and not
              everyone has the expertise to find and recruit the best talent
              themselves.
            </motion.span>
          </div>
          <div>
            <p>02</p>
            <h1>Design</h1>
            <motion.span custom={3} variants={textAnimation}>
              A recruitment agency HUNTNITE is a business that is hired by
              companies and organisations to find suitable employees. Employers
              outsource recruitment because it takes a lot of resources and not
              everyone has the expertise to find and recruit the best talent
              themselves.
            </motion.span>
          </div>
          <div>
            <p>03</p>
            <h3>Deliver</h3>
            <motion.span custom={3} variants={textAnimation}>
              A recruitment agency HUNTNITE is a business that is hired by
              companies and organisations to find suitable employees. Employers
              outsource recruitment because it takes a lot of resources and not
              everyone has the expertise to find and recruit the best talent
              themselves.
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Process;
