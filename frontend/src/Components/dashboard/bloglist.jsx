import React, { useEffect, useState } from 'react'
import axios from "axios";
import Spinner from "../../helper/spinner";
import "./styles/bloglist.css"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Bloglist() {
  const navigation = useNavigate();

const api="http://localhost:20201/api/blogs";
const [mydata,setmydata]=useState("");
const [refresh,setrefresh]=useState(false)

const fetchingdata=()=>{
axios.get(api).then(res=>{
console.log(res.data);
setmydata(res.data)
}).catch(err=>{
  console.log(err)
})
}
const deleteblog=(id)=>{
   const dl=axios.delete(`http://localhost:20201/api/blogs/${id}`).then(res=>{
    console.log(id);
  
    }).catch(err=>{
      console.log(err)
      if (dl.response.status === 404) {
        navigation("/404");
      }
    }).finally(
      ()=>{
        fetchingdata();

      }
    )
}
const befourlaoding=[1,2,3,5,6,7,8,9];

useEffect(() => {
  fetchingdata();
}, [refresh]);
useEffect(() => {
  fetchingdata();
}, []);


  return (
    <div className='listblog'>
      <button onClick={()=>{navigation('/adm/insertblog')}}>delete</button>
      <div><table>
          <thead>
            <tr>
              <th style={{cursor:"pointer"}} onClick={()=>setrefresh(!refresh)}>no</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>delete</th>
              <th>update</th>


            </tr>
          </thead>
          <tbody>
          {mydata.length > 0 ? (

mydata.map((item,index)=>(
    <tr key={index}>
    <td>{index+1}</td>
    <td>{item.title}</td>
    <td>{item.desc}</td>
    <td>{item.status==1?("true"):("false")}</td>
    <td>{item.createdAt}</td>
    <td>{item.updatedAt}</td>
    <td><button onClick={()=>{navigation(`/adm/updateblog/${item.id}`)}}>Update</button></td>
    <td><button onClick={()=>deleteblog(item.id)}>delete</button></td>
  </tr>
          ))
          ) : (
            befourlaoding.map((item,index)=>(
              <tr key={index}>
              <td>{index}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
                    )))}
          </tbody>
        </table></div>
        
    </div>
  )
}

export default Bloglist