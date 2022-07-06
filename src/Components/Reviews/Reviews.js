import React, { useState } from "react";
import "./Reviews.css";
import { ReviewsData } from "./ReviewsData";
import Reviewspic from "../../Assets/REVIEWS.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";

const Reviews = () => {
  const [selected, setSelected] = useState(0);
  const tLength = ReviewsData.length;

  const animate =() => {
      
  }

  return (
    <section className="reviews__container">
      <div className="reviews__box">
        <div>
          <img src={Reviewspic} alt="reviews" />
        </div>

        <div className="reviews__text">
          <motion.hr
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -40, opacity: 0 }}
            transition={{ type: "tween", duration: 0.5 }}
          />
          <h3>What people say about us</h3>
          <motion.p
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 10, opacity: 0 }}
            transition={{ type: "tween", duration: 1.5 }}
          >
            {ReviewsData[selected].text}
          </motion.p>
          <motion.hr
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -40, opacity: 0 }}
            transition={{ type: "tween", duration: 1 }}
          />{" "}
          <small>{ReviewsData[selected].name}</small>
        </div>
      </div>

      <motion.div
        whileInView={{ y: -10, opacity: 1 }}
        initial={{ y: 80, opacity: 0.5 }}
        transition={{ type: "tween", duration: 2 }}
      >
        <img src={ReviewsData[selected].image} alt="" className="testifier" />
      </motion.div>

      <div className="icons">
        <AiOutlineArrowLeft
          className="icon"
          onClick={() => {
            selected === 0
              ? setSelected(tLength - 1)
              : setSelected((prev) => prev - 1);
          }}
        />

        <AiOutlineArrowRight
          className="icon"
          onClick={() => {
            selected === tLength - 1
              ? setSelected(0)
              : setSelected((prev) => prev + 1);
          }}
        />
      </div>
    </section>
  );
};

export default Reviews;
