import React, { useEffect, useState } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import Spinner from "../../helper/spinner";
import useAxios from "../../hooks/useAxiosblog";
import moment from 'moment'

import "./SingleBlog.css";
const SingleBlog = () => {
  const navigation =useNavigate();
  const { id } = useParams();
  const [blogs, setblogs] = useState([]);
  const { fetchData, response, loading, error } = useAxios("blogs");

  useEffect(() => {

    
    fetchData(id);
    console.log(response);
  }, [id]);

  return <div className="SingleBlog">

{!loading ?(  <div>
       <h2>{response.title}</h2>
     <p>  {moment(response.createdAt).format("MMM Do YY")}</p>
       <h2>{response.desc}</h2>
        </div>):(
          <Spinner/>
        )
      
      }
  </div>;
};

export default SingleBlog;
