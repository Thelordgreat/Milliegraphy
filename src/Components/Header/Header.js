import React from "react";
import "./Header.css";
import Group2 from "../../Assets/Group2.png";
import Rectangle from "../../Assets/Rectangle-min.png";
import Picture1 from "../../Assets/picture2-min.jpg";
import Art from "../../Assets/ART.png";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="header" id="home">
      <img src={Group2} alt="background img" className="first-img" />

      <div className="content container">
        <div className="first_section">
          <div>
            <div className="text__box">
              <div className="lines">
                <div className="line1"></div>
                <div className="line2"></div>
              </div>

              <div className="text">
                <h2>Adding Colors to reality</h2>
                <p>
                  The world is a canva. <br /> <span>Milliegraphy</span> helps
                  you draw a perfect memory
                </p>
              </div>
            </div>

            <motion.img
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 2 }}
              src={Rectangle}
              alt="art"
              className="second-img"
            />
            <img src={Art} alt="art" className="third-img" />
          </div>
        </div>

        <motion.div
          animate={{ x: -0 }}
          initial={{ x: 450 }}
          transition={{ type: "spring", delay: 1 }}
          className="second_section"
        >
          <img src={Picture1} alt="milliegraphy" />
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
