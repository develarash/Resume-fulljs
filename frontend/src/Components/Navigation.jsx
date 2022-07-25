import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';import  "../styles/navigation.css"
const Navigation = () => {
  const [toggle,setToggle]=useState(false)

    let activeStyle = {
     
        color:"var(--f3)"
        
      };
      let activeClassName = "red";
      const linkNavigation=[{address:"/" ,name:"AboutMe"},{address:"Exprience" ,name:"Exprience"},{address:"Projects" ,name:"Projects"},{address:"questions" ,name:"questions ?"},{address:"news" ,name:"news "},{address:"blog" ,name:"blog "}]
  return (
    <div className="navigation">
      
    <nav>
      <div  className='toggle-icon' onClick={()=>setToggle(!toggle)}>{toggle? <MenuOpenIcon/>:<MenuIcon/>}</div>
     
      <ul className={toggle?" ul-navigation active ":"ul-navigation"}>

        {linkNavigation.map((elem,index)=>(
 <li className='liheader' key={index}  onClick={()=>setToggle(!toggle)}>
 
 <NavLink
   to={elem.address}
   style={({ isActive }) =>
     isActive ? activeStyle : undefined
   }
 >
   {elem.name}
 </NavLink>
</li>

        ))}
       
      </ul>
    </nav>
 
    </div>
  )
}

export default Navigation

