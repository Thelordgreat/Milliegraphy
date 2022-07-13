import React from "react";
import "./Portfolio.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <div className="Portfolio__container" id="portfolio">
      <div className="portfolio__content">
        <h2>Portfolio</h2>

        <div className="images">
          <motion.div
            whileInView={{ y: -40, opacity: 1 }}
            initial={{ y: 100, opacity: 0.5 }}
            transition={{ type: "tween", duration: 1 }}
            className="image1"
            onClick={() => {
              navigate("/couples");
            }}
          >
            <a href="#couples">Couples</a>
          </motion.div>

          <motion.div
            whileInView={{ y: -20, opacity: 1 }}
            initial={{ y: 100, opacity: 0.5 }}
            transition={{ type: "tween", duration: 1.5 }}
            className="image2"
            onClick={() => {
              navigate("/portraits");
            }}
          >
            <a href="#portraits">Portraits</a>
          </motion.div>

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0.5 }}
            transition={{ type: "tween", duration: 2 }}
            className="image3"
            onClick={() => {
              navigate("/fashion");
            }}
          >
            <a href="#fashion">Fashion</a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
