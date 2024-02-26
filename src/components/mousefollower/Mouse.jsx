import React, { useEffect, useState } from "react";
import "./Mouse.css";
import { motion } from "framer-motion";

const Mouse = () => {
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
      }}
      className="cursor"
    ></motion.div>
  );
};

export default Mouse;
