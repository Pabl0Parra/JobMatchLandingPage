import React from "react";
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients "
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    {/* BACKGROUND GRADIENT */}
    <div className="absolute z-[0]  w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"></div>

    {/* HEADING */}
    <div className="relative flex flex-col items-center justify-between w-full mb-6 md:flex-row sm:mb-16 z-[1]">
      <h1 className={styles.heading2}>
        Qué dice la <span className="text-gradient">gente</span>
        <br className="hidden sm:block " /> sobre nosotros.
      </h1>
      <div className="w-full mt-5 md:mt-0">
        <p className={`${styles.paragraph} max-w-[450px]  text-left `}>
          Todo lo que necesitas para encontrar un nuevo puesto o candidato.
        </p>
      </div>
    </div>
    {/* CARDS CONTAINER */}
    <div className="flex flex-wrap justify-center sm:justify-start w-full feedback-container relative z-[1]">
      {/* CARD */}
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
