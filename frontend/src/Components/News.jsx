import React from 'react'
import "../styles/News.css";
import pic from "../assets/i.jpg"
const News = () => {
  return (
    <div className='News'>
        <div className='img'>
            <img src={pic} alt="" />
        </div>
    </div>
  )
}

export default News