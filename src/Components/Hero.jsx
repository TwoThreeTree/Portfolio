import React from "react";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, OrbitControls } from "@react-three/drei";
// import { ArrowSection } from "./ArrowSection";
import { inViewHandler } from "../animationHandler";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";

// import { logo } from "../assets/img/logos/logo.svg";

export const Hero = () => {
  const animation = useAnimation();

  return (
    <InView onChange={(inView) => inViewHandler(inView, animation)}>
      <section
        id="home"
        className="h-fit mt-20 justify-center flex-1 bg-primary flex items-center w-full flex-col"
      >
        <div className="container mx-auto  flex justify-center sm:h-1/3">
          <motion.div
            className="content-wrapper justify-center flex-wrap flex items-center lg:mt-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={animation}
          >
            <div className="  mr-16 h-[300px] w-[250px]">
              <Canvas className="lg:block inset-8">
                {/* <OrbitControls enableZoom={false} /> */}
                <ambientLight intensity={0.1} />
                <directionalLight position={[3, 2, 1]} />

                <Sphere args={[1, 100, 200]} scale={2.2}>
                  <MeshDistortMaterial
                    color="#800080"
                    attach="material"
                    distort={0.5}
                    speed={2}
                  />
                </Sphere>
              </Canvas>
            </div>
            <div className="flex flex-col sm:mt-2  items-center lg:items-start">
              <div className="flex">
                <div className="w1 px-0.5 mr-8 md:h-42 bg-gradient-to-br from-violet-500 via-pink-500 to-red-500"></div>
                <div className="text-content ">
                  <h1 className="text-4xl lg:text-5xl pb-4 font-bold">
                    Hi, I'm <span className=" text-violet-900 "> Kai</span>.
                  </h1>
                  <p className="pb-4 max-w-[480px] text-lg text-left  ">
                    {" "}
                    a computer science graduate with a passion for software
                    development. I thrive on learning new technologies and
                    continuously improving my skills. With a focus on creating
                    efficient and innovative solutions, I'm dedicated to
                    delivering high-quality results. My portfolio showcases my
                    diverse range of projects. Let's connect and discuss how I
                    can contribute to your next exciting venture!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className=" bg-primary flex justify-center items-center"></div>
      </section>
    </InView>
  );
};
