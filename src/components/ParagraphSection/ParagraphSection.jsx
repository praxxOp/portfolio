import React, { useRef } from "react";
import "./ParagraphSection.css";
import { motion, useScroll } from "framer-motion";
const ParagraphSection = () => {
  const Element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: Element,
    offset: ["start 0.9", "start .5"],
  });

  return (
    <>
      <div className="main__paragraphSection">
        <motion.p ref={Element} style={{ opacity: scrollYProgress }}>
          I bring innovative ideas to life as a skilled Front-End Developer. By
          blending technical precision with creative flair, I craft seamless and
          engaging digital experiences. Together, we can turn your vision into a
          dynamic and interactive reality.
        </motion.p>
      </div>
    </>
  );
};

export default ParagraphSection;
