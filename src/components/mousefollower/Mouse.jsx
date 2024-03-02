import React, { useEffect, useState } from "react";
import "./Mouse.css";
import { motion } from "framer-motion";

const Mouse = ({ MouseSize }) => {
  const [position, setposition] = useState({
    x: null,
    y: null,
  });

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setposition({
        x: e.clientX,
        y: e.clientY,
      });
    });
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x,
        y: position.y,
        scale: MouseSize ? 10: 1
      }}
      className="cursor"
    ></motion.div>
  );
};

export default Mouse;
