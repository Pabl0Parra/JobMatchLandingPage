import React from "react";
import { robot } from "../assets";
import GetStarted from "./GetStarted";
import styles from "../style";
import { motion } from "framer-motion";

const Hero = ({ slideLeftVariants, slideRightVariants }) => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    {/* LEFT HERO SECTION */}
    <motion.div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      variants={slideRightVariants}
      initial={slideRightVariants.hidden}
      whileInView={slideRightVariants.whileInView}
      viewport={slideRightVariants.viewport}
    >
      {/* DISCOUNT DIV */}
      {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img
          src={discount}
          alt="discount"
          className="sm:w-[32px] sm:h-[32px] w-[52px] h-[52px] mr-2"
        />
        <p className={`${styles.paragraph} leading-snug`}>
          <span className="text-white">20% </span>
          Descuento <span className="text-white">durante el primer mes </span>
        </p>
      </div> */}

      <div className="flex flex-row items-center justify-between w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Encuentra
          <br className="hidden sm:block" />
          el <span className="text-gradient">trabajo</span>
        </h1>
        {/* GETSTARTED COMPONENT ON DESKTOP */}
        <div className="hidden mr-0 ss:flex md:mr-4">
          <GetStarted />
        </div>
      </div>
      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        {" "}
        de tus <span className="text-gradient">sueños</span>.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        JobMatch está revolucionando la forma en que buscamos trabajo. Con su
        innovador estilo de búsqueda al estilo Tinder, JobMatch te permite ver
        ofertas de trabajo disponibles, y encontrar aquellas que más se ajustan
        a tus habilidades y preferencias.
      </p>
    </motion.div>

    {/* RIGHT HERO SECTION */}
    {/* HERO IMG + GRADIENTS */}
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <motion.img
        src={robot}
        alt="billing"
        className="w-[100] h-[100] relative z-[5]"
        variants={slideLeftVariants}
        initial={slideLeftVariants.hidden}
        whileInView={slideLeftVariants.whileInView}
        viewport={slideLeftVariants.viewport}
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
      <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient rounded-full"></div>
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
    </div>
    {/* GETSTARTED COMPONENT ON MOBILE */}
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
