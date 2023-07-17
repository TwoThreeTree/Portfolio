import React from "react";
import { inViewHandler } from "../animationHandler";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import { skills } from "../data";

export const Skills = () => {
  const animation = useAnimation();

  return (
    <InView onChange={(inView) => inViewHandler(inView, animation)}>
      <section className="h-[fit] bg-primary py-12">
        <div className="container mx-auto  bg-gradient-to-br from-violet-900 via-pink-700 to-red-900 rounded-[20px] p-6">
          <motion.div
            className="flex gap-2 flex-wrap justify-between items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={animation}
          >
            {skills.map((skill, index) => (
              <div className="max-h-xs basis-20" key={index}>
                <img src={skill.image} style={{ height: "50px" }} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </InView>
  );
};
