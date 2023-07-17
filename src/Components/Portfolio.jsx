import React from "react";
import { inViewHandler } from "../animationHandler";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import { projects } from "../data";
// import { projectPic } from "../assets/img/pro/project.jpg";

export const Portfolio = () => {
  const animation = useAnimation();

  return (
    <InView onChange={(inView) => inViewHandler(inView, animation)}>
      <section id="portfolio" className="h-76 bg-primary py-12">
        <div className="container mx-auto">
          <motion.div
            className="grid lg:grid-cols-3 gap-10 md:grid-flow-row md:grid-cols-3 sm:grid-cols-2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={animation}
          >
            {projects.map((project, index) => (
              <div
                className="flex flex-col h-fit  px-4 py-4 rounded-md bg-purple-950"
                key={index}
              >
                <h1 className="text-xl text-center text mb-3">
                  {project.title}
                </h1>
                <a href={project.url} target="_blank">
                  <img
                    src={project.image}
                    className="scale-90 hover:scale-100 rounded-md ease-in-out duration-200"
                  ></img>{" "}
                </a>
                <p>{project.content}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </InView>
  );
};
