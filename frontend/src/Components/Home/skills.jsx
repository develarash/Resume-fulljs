import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo3 } from "../../assets/react.svg";
import { ReactComponent as Logo4 } from "../../assets/pwa.svg";
import { ReactComponent as Logo5 } from "../../assets/Node.js_logo.svg";

import { ReactComponent as Js } from "../../assets/js.svg";
import "./css/skills.css";
const Skills = () => {
  return (
    <div className="HomeSkills">
      {/* one */}
      <div className="RowSkills">
        <div className="svgSkills">
          <Js />
        </div>
        <div className="contentSkills">
          <h2>JavaScript</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            necessitatibus quas alias neque quos minima aliquid architecto
            quibusdam cupiditate! Non iste ullam, aut numquam deleniti
            voluptates corrupti consequuntur blanditiis inventore?
          </p>
          <Link to="Projects?filter=JavaScript">JavaScipt Projects</Link>
        </div>
      </div>
      {/* two */}
      <div className="RowSkills"> <div className="svgSkills">
          <Logo3 />
        </div>
        <div className="contentSkills">
          <h2  className="h2React">
            React Js
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            necessitatibus quas alias neque quos minima aliquid architecto
            quibusdam cupiditate! Non iste ullam, aut numquam deleniti
            voluptates corrupti consequuntur blanditiis inventore?
          </p>
          <Link className="aReact" to="Projects?filter=react">
            React Projects
          </Link>
        </div>
       
      </div>
      {/* three */}
      <div className="RowSkills">
        <div className="svgSkills">
          <Logo4 />
        </div>
        <div className="contentSkills">
          <h2 className="h2Pwa">Progressive Web Apps</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            necessitatibus quas alias neque quos minima aliquid architecto
            quibusdam cupiditate! Non iste ullam, aut numquam deleniti
            voluptates corrupti consequuntur blanditiis inventore?
          </p>
          <Link className="aPwa" to="Projects?filter=pwa">
            JavaScipt Projects
          </Link>
        </div>
      </div>
      {/* four */}
      <div className="RowSkills"><div className="svgSkills">
          <Logo5 />
        </div>
        <div className="contentSkills">
          <h2 className="h2Nodejs">Node js </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            necessitatibus quas alias neque quos minima aliquid architecto
            quibusdam cupiditate! Non iste ullam, aut numquam deleniti
            voluptates corrupti consequuntur blanditiis inventore?
          </p>
          <Link className="aNodejs" to="Projects?filter=nodejs">
            Nodejs Projects
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Skills;
