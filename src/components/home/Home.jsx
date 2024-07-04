import React from "react";
import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
  const circleArray = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <>
      <div className="main__home">
        <div className="home__left">
          <div className="circle__content">
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
        </div>
        <div className="home__right">
          <p>
            As a Front-End Developer, I specialize in turning your designs into
            seamless, visually stunning digital experiences. I focus on crafting
            user-friendly interfaces to bring your concepts to life. Let's
            collaborate to create an engaging and interactive frontend for your
            project.
          </p>
         
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
