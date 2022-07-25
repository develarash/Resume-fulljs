import { useState, useEffect } from "react";
import "./blog.css";
import pic from "../../assets/banner-prof.jpg";

import moment from 'moment'

// import {ReactComponent as pic3} from "../../assets/yell.svg";
import { Link } from "react-router-dom";
import Spinner from "../../helper/spinner";
import axios from "axios";
import useAxios from "../../hooks/useAxiosblog";
const Blog = () => {
  // const [loading, setloading] = useState(false);
  const [currentPage,setCurrentPage]=useState(1);
  const [postsPerPage,setPostPerPage]=useState(10);
  const [blogs, setblogs] = useState([]);
  // const { fetchData, response, loading, error } = useAxios("blogs");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getBlogs();
    console.log(blogs);
  }, []);

  const getBlogs = async () => {
    setLoading(true);
    const response = await axios.get("http://localhost:20201/api/blogs");
    // console.log(response.data);
    setblogs(response.data);
    setLoading(false);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts=blogs.slice(indexOfFirstPost,indexOfLastPost)
  // console.log(currentPosts)

const paginate=(pageNumber)=>setCurrentPage(pageNumber);

  return (
    <div className="articles">
     
      <div className="main">
        
          <div className="articleSection">
            
            {currentPosts.length > 0 ? (
              currentPosts.map((item, index) => (
                
                <div className="itemArticles" key={index}>
                  <div className="img">
                    <img src={pic}  alt={item.title} />
                    </div>
                    <div className="contentitemArticles">
                  <p>{item.title}</p>
                  <Link to={`/blog/${item.id}`}>read</Link>
                  </div>

                </div>
              ))
            ) : (
 
             <Spinner/>
            )}
          </div>
              <Pagination postsPerPage={postsPerPage} totalPosts={blogs.length}paginate={paginate} />
 
      </div>
    </div>
  );
};

export default Blog;


const Pagination =({postsPerPage,totalPosts,paginate})=>{
  const pageNumbers=[];
  for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++)
  {
    pageNumbers.push(i)

  }
return (
  <div>
<ul className="paginationblog">
  {pageNumbers.map(number=>(
    <li key={number} className="paginationblogli">
      <button onClick={()=>paginate(number)}  className="paginationblogbutton">
      {number}
      </button>
    </li>
  ))}
</ul>
  </div>
)
}
