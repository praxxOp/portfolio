import React from "react";
import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
  const circleArray = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <>
      <div className="main__home">
        <div className="home__left">
          <div className="home__circle__group">
            {circleArray.map((index) => (
              <motion.div
                key={index}
                className="home__circle"
                initial={{
                  x: 0,
                }}
                animate={{
                  x:
                    index === 3
                      ? 0
                      : index < 3
                      ? -20 * (3 - index)
                      : 20 * (index - 3),
                  transition: {
                    duration: 1.4,
                  },
                }}
                style={{
                  backgroundColor: `rgba(126, 127, 123, ${
                    index < 3 ? 0.5 : Math.abs(index - 3) / 4 + 0.5
                  })`,
                }}
                whileHover={{
                  scale: 1.2,
                  transition: {
                    duration: 0.5,
                  },
                }}
              ></motion.div>
            ))}
          </div>
          <div className="circle__group__heading">
            <h6>IMPROVING EVERYDAY</h6>
          </div>
        </div>
        <div className="home__right">
          <p>
            As a Front-End Developer, I sculpt seamless digital experiences,
            blending creativity with code to bring designs to life. Crafting
            user-friendly interfaces is my passion, and I thrive on transforming
            concepts into interactive and visually stunning realities.
          </p>
          <p>
            As a perpetual learner, I constantly embrace new challenges and stay
            updated on emerging trends. Armed with expertise in front-end
            development, I also delve into blockchain and future technologies,
            ensuring I'm well-prepared for the dynamic digital landscape.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
