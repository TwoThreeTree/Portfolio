import React from "react";
import { inViewHandler } from "../animationHandler";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import { skills } from "../data";

export const Skills = () => {
  const animation = useAnimation();

  return (
    <InView onChange={(inView) => inViewHandler(inView, animation)}>
      <section className="h-76 bg-primary py-12">
        <div className="container mx-auto">
          <motion.div
            className="grid grid-cols-6 md:grid-flow-row"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={animation}
          >
            {skills.map((skill, index) => (
              <div className="max-h-xs" key={index}>
                <img src={skill.image} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </InView>
  );
};
