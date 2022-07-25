import React, { useEffect, useState } from "react";
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';

import "../styles/Projects.css";
import pic1 from "../assets/pii.png";
import pic2 from "../assets/back.jpg";
import pic3 from "../assets/back.jpg";
import pic4 from "../assets/back.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import { getprojects } from "../data.js";
import useAxios from "../hooks/useAxiosblog";
import Spinner from "../helper/spinner";

const getprg = getprojects();

const Project = ({ githubAddImg, skills, githubadd, title, }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  let filter = searchParams.get("filter");
  console.log(githubAddImg);


 
  return (
    <div className="project">
      <div className="img">
        <img
          src={githubAddImg}
          alt={title}
        />
        <div className="overlay">
          <ul>
            <li style={{ color: "var(--f3)" }}> Skills</li>
            {
            skills.map((prg,index) => (
              <li key={index}>{prg}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="info">
        
      <h1>{title}</h1>

        <a href={githubadd} target="_blank" className="gitsecton">
          <GitHubIcon fontSize="large" className="ic" />
          <span>Github source</span>
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  //   const [data, setData] = useState("");

  // const getData=async()=>{
  //   const res=await axios.get(
  //     "https://github.com/develarash/Mydata/blob/main/Resume_data.json"
  //   );
  //   setData(res.data);
  //   console.log(res.data)

  // }
  // useEffect(()=>{
  //   getData();
  // },[]);
  const [resetInput,setResetInput]=useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [showmore, setShowmore] = useState(6);

useEffect(()=>{
})

  const showMoreItems = () => {
    setShowmore((prevValue) => prevValue + 3);
  };
  const { fetchData, response, loading, error } = useAxios("projects");
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="projects">
      <div className="searchInput">
        <SearchIcon />
        <input
          placeholder="Search prj"
          className=""
          type="text"
          value={searchParams.get("filter") || ""}
          onChange={(e) => {
            let filter = e.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        <button onClick={()=>setSearchParams('')}><ClearTwoToneIcon /></button>
      </div>

      <div className="flex-proj">
        {/* <Project
          name="calculator"
          img={pic1}
          desc="nodejs reactjs javascript"
        />
        <Project
          name="calculator"
          img={pic2}
          desc="nodejs reactjs javascript"
        />
        <Project
          name="calculator"
          img={pic3}
          desc="nodejs reactjs javascript"
        /> */}

        {response.length > 0 ? (
          response
            .slice(0, showmore)
            .filter((prg) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = prg.title.toLowerCase();
              return name.includes(filter.toLowerCase());
            })
            .map((prg, index) => (
              <Project
                key={index}
                title={prg.title}
                skills={prg.skills}
                githubadd={prg.githubAdd}
                githubAddImg={prg.githubAddImg}

              />
            ))
        ) : (
          <Spinner />
        )}
      </div>
      {response.length > 0 ? (        <button className="howMore" onClick={showMoreItems}>Show more</button>

      
      ):(
null
      )
}
    </div>
  );
};

export default Projects;
