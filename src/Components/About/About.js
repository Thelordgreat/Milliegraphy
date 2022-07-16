import React from "react";
import "./About.css";
import Mypic from "../../Assets/mypic-min.jpg";
import A from "../../Assets/ABOUT.png";
import { motion } from "framer-motion";

const About = () => {
    // function isSmall() {
    //   if (this.windowWidth < 768) {
    //     return true;
    //   }
    //   return false;
    // }

    return (
        <div className="about container" id="about">
            <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: 80, opacity: 0.5 }} transition={{ type: "tween", duration: 1.5 }}>
                <img src={Mypic} alt="Milliegraphy" className="my_pic" />
            </motion.div>

            <div className="about__text__box">
                <img src={A} alt="About Milliegraphy" />
                <div className="about__text">
                    <h2>
                        Hi, I'm <span>Onyewuchi Micheal</span>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, reiciendis! Nisi earum unde veritatis reprehenderit?
                        Labore, minima sunt vero inventore numquam veniam corrupti vel minus deserunt nostrum, quam exercitationem ea!
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, temporibus ullam. Possimus, ut voluptates! Porro
                        obcaecati laudantium animi? Quisquam, dignissimos. Ratione molestias accusantium pariatur dignissimos molestiae
                        voluptate modi vitae non.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
