import React from 'react'
import pic from "../../assets/banner-prof.jpg";
import {ReactComponent as Logo1} from "../../assets/js.svg";
import {ReactComponent as Logo2} from "../../assets/nodejs2.svg";
import {ReactComponent as Logo3} from "../../assets/react.svg";
import {ReactComponent as Logo4} from "../../assets/pwa.svg";
import { Navigate, useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate=useNavigate();
  return (
    <div className='banner'>
    <div className='banner-intro'>
        <div className='intro-img'>
            <img src={pic} alt="" /> </div>
            <div className='intro-name'>
                <p>i'm Arash Rahimi fullstack </p>
                <p style={{textAlign:"left"}}>  javascript developer</p>
                <h1 className='big-font'>js</h1>

            </div>
    </div>
    <div className='banner-about-me'>
        <h2>About me</h2>
        <p>I am Arash, a full-stack JavaScript developer, I am interested in developing web and mobile applications and implementing new ideas as a team work, I studied computer software in high school and university and collaborated in startup projects.</p>
        <button className='exprienceButton' onClick={()=>navigate("/Exprience") }>Exprience</button>
    </div>
    </div>
  )
}

export default Banner