import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import axios from "axios";

// log svg
import { ReactComponent as Email } from "../assets/social media/envelope-solid.svg";
import { ReactComponent as Twitter } from "../assets/social media/twitter-square-brands.svg";
import { ReactComponent as Linkedin } from "../assets/social media/linkedin-brands.svg";
import { ReactComponent as Phone } from "../assets/social media/phone-square-alt-solid.svg";
import { ReactComponent as Github } from "../assets/social media/github-square-brands.svg";

const linkNavigation = [
  { address: "/", name: "AboutMe" },
  { address: "Exprience", name: "Exprience" },
  { address: "Projects", name: "Projects" },
  { address: "questions", name: "questions ?" },
  { address: "blog", name: "blog " },
];

const Footer = ({blogs}) => {
  
  return (
    <div className="footer">
      <div className="footerSection">
      <div className="navLinks1">
        <ul>
          {linkNavigation.map((item, index) => (
            <li className="footerLi" key={index}>
              <Link className="footera" to={item.address}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navLinks2">
      <div className="socialmedais">
        
        <ul>
          <li >
            <Email />
            <span>github.com/develarash</span>
          </li>
          <li>
            <Twitter />
            <span>develarash@gmail.com</span>
          </li>
          <li>
            <Linkedin />
            <span>github.com/develarash</span>
          </li>
          <li>
            <Github />
            <span>github.com/develarash</span>
          </li>
          <li>
            <Phone />
            <span>+98_9381378120</span>
          </li>
        </ul>
      </div>
       
      </div>
      <div className="navLinks3">
      <h3 >Latest Articles</h3>
        <ul className="navLinks3ul">
          {blogs.slice(2, 4).map((item, index) => (
            <li className="navLinks3li" key={index}><Link to={`/blog/${item.id}`}>{item.title}</Link></li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Footer;
