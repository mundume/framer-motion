import React, { useState } from "react";
import logo from "./logo.svg";
import poweredBy from "./powered-by-vitawind-dark.png";
import { motion } from "framer-motion";

function App() {
  return (
    <div>
      <motion.div
        className="m-auto mt-60  block text-center text-5xl text-yellow-500"
        animate={{ rotate: [0, 100, 100, 0], y: [0, 100, 100, 0] }}
      >
        hello
      </motion.div>
    </div>
  );
}

export default App;
