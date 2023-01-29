import React from "react";
import { motion } from "framer-motion";

const ParagraphInfo = ({ children }) => {
  return <motion.div>{children}</motion.div>;
};

export default ParagraphInfo;
