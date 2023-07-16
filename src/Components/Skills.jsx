import React from "react";
import { inViewHandler } from "../animationHandler";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import { skills } from "../data";

export const Skills = () => {
  const animation = useAnimation();

  return (
    <InView onChange={(inView) => inViewHandler(inView, animation)}>
      <section className="h-[200px] bg-primary py-12">
        <div className="container bg-gradient-to-br from-violet-900 via-pink-700 to-red-900 rounded-[20px] h-[100px] lg:w-[500px] mx-auto flex items-center">
          <motion.div
            className="flex flex-auto justify-around w-[500px] h-[60px] flex-wrap"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={animation}
          >
            {skills.map((skill, index) => (
              <div className="max-h-xs" key={index}>
                <img src={skill.image} style={{ height: "50px" }} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </InView>
  );
};
