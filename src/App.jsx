import React, { useState } from "react";
import logo from "./logo.svg";
import poweredBy from "./powered-by-vitawind-dark.png";
import { motion } from "framer-motion";
import Section from "./components/Section";
function App() {
  return (
    <div>
      <Section
        heading="hello"
        style="bg-green-600 text-white h-96 flex items-center justify-center text-5xl"
        initial
      >
        hello
      </Section>
      <Section
        style="bg-yellow-400 text-white h-96 flex items-center
        justify-center text-5xl"
      >
        iam
      </Section>
      <Section
        heading="kilonzo"
        style="bg-rose-400 text-white h-96 flex items-center justify-center text-5xl"
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ delay: 0.3 }}
        whileInView={{ opacity: 1, scale: 1 }}
      >
        Kilonzo
      </Section>
      <Section
        heading="and"
        style="bg-orange-500 text-white h-96 flex items-center justify-center text-5xl overflow-hidden "
        initial={{ opacity: 0 }}
        transition={{ delay: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ rotate: 360, scale: 1.4 }}
          transition={{ delay: 1 }}
        >
          and
        </motion.div>
      </Section>
      <Section
        heading="i"
        style="bg-sky-300 text-white h-96 flex items-center justify-center text-5xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          whileInView={{ opacity: 1, scale: 1.2 }}
          transition={{ delay: 0.5 }}
        >
          I
        </motion.div>
      </Section>
      <Section
        heading="love"
        style="bg-indigo-400 text-white h-96 flex items-center justify-center text-5xl"
      >
        love
      </Section>
      <Section
        heading="boobies"
        style="bg-sky-400 text-white h-96 flex items-center justify-center text-5xl"
      >
        boobies
      </Section>
    </div>
  );
}

export default App;
