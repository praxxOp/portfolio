import React, { useEffect, useState } from "react";
import "./Mouse.css";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

const Mouse = ({ MouseSize }) => {
  const [position, setPosition] = useState({
    x: null,
    y: null,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x,
        y: position.y,
        scale: MouseSize ? 5 : 1,
      }}
      className="cursor"
    >
      {MouseSize ? <GoArrowUpRight size={5} /> : ""}
    </motion.div>
  );
};

export default Mouse;
