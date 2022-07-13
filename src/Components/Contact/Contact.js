import React from "react";
import "./Contact.css";
import logo from '../../Assets/logo3.png';
import group8 from '../../Assets/Group8.png';
import { BsInstagram } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="contact__container" id="contact">
      <div className="section1">
        <img src={logo} alt="logo" className="logo" />

        <h2>Do drop me a message or enquiry</h2>
        <p>i'll love to hear from you,share your thoughts on my work. <br /> if you are in need of a professional photographer,do reach out</p>

        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <br />
          <input type="text" placeholder="Message" className="message" />
        </form>

        <img src={group8} alt="" className="elipse"/>
      </div>

      <div className="section2">
        <div className="content">
          <div>
            <h3>Address:</h3>
            <p>2387,plaza Abuja,Nigeria</p>
          </div>
          <div>
            <h3>Get in touch</h3>
            <p>xyz@gmail.com</p>
            <p>+234(456)-789-0000</p>
          </div>

          <div className="socials">
          <h3>Socials</h3>
            <i><BsInstagram className="icon"/></i>
            <i><AiFillFacebook className="icon"/></i>
            <i><AiOutlineTwitter className="icon"/></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
