import React, { useEffect, useState } from "react";
import "./Mouse.css";
import { motion } from "framer-motion";

const Mouse = () => {
  const [position, setPosition] = useState({
    x: null,
    y: null,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX-1,
        y: e.clientY-1,
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
      
      }}
      className="cursor"
    >
    </motion.div>
  );
};

export default Mouse;
