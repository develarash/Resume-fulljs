import React from "react";
import "./css/info.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CodeIcon from "@mui/icons-material/Code";
import { ReactComponent as Language } from "../../assets/social media/globe-solid.svg";
import { ReactComponent as Socailmedia } from "../../assets/social media/address-card-solid.svg";
import { ReactComponent as Email } from "../../assets/social media/envelope-solid.svg";
import { ReactComponent as Twitter } from "../../assets/social media/twitter-square-brands.svg";
import { ReactComponent as Linkedin } from "../../assets/social media/linkedin-brands.svg";
import { ReactComponent as Phone } from "../../assets/social media/phone-square-alt-solid.svg";
import { ReactComponent as Github } from "../../assets/social media/github-square-brands.svg";
// import { ReactComponent as Codeicon } from "../../assets/skills/code-solid.svg";


import englishflag from "../../assets/English.png";

import franceflag from "../../assets/franceFlag.png";
function Info() {
  return (
    <div className="infoHome">
      <div className="languages">
        <h1 className="h1languages">
          {" "}
          <span>Languages</span>
        </h1>
        <ul>
          <li>
            {" "}
            <div className="img">
              <div></div>
              <img className="intendimg" src={franceflag} alt="ss" />
            </div>
            <span>Englsih</span>
            <span style={{fontSize:"70%"}}>%80</span>
          </li>
          <li>
            {" "}
            <div className="img">
              <img className="intendimg" src={franceflag} alt="ss" />
            </div>
            <span>franch </span>
            <span style={{fontSize:"70%"}}>%40</span>
          </li>
          <li>
            {" "}
            <div className="img">
              <img className="intendimg" src={franceflag} alt="ss" />
            </div>
            <span>Persian</span>
            <span style={{fontSize:"70%"}}>%100</span>
          </li>
        </ul>
      </div>
     
      <div className="otherskills">
        <h1 className="h1otherskills">
          Skills
        </h1>
        <h3>Professional title: Fullstack javascript develper</h3>
      </div>
      <div className="socialmedais">
        <h1 className="h1socialmedais">
          <span>Social Medias</span>{" "}
        </h1>
        <ul>
          <li>
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
  );
}

export default Info;
