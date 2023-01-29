import React, { Children } from "react";
import { motion } from "framer-motion";
import ParagraphInfo from "./ParagraphInfo";

const Section = ({
  children,
  style,
  animate,
  initial,
  whileInView,
  transition,
}) => {
  return (
    <motion.div
      className={style}
      animate={animate}
      initial={initial}
      whileInView={whileInView}
      transition={transition}
    >
      <p>{children}</p>
    </motion.div>
  );
};

export default Section;
