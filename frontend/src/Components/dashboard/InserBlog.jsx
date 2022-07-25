import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Navigate, useNavigate } from "react-router-dom";
import "./styles/Inserblog.css";
import axios from "axios";
import {insertBlogSchema} from "../../validations/insertblogvalidation"
import Spinner from "../../helper/spinner";
function InserBlog() {
  const navigation=useNavigate();

  const [errors,seterrors]=useState([]);
  const [loading,setloading]=useState(false);

  const [formsdata, setformsdata] = useState({
    title: "",
    desc: "",
    status: "",
  });
  const handleChange = (e) => {
    setformsdata({
      ...formsdata,
      [e.target.name]: e.target.value,
    });
  };


  const handlesubmit=async (e)=>{
    e.preventDefault();
    // console.log(formsdata)
    try{setloading(true)
await insertBlogSchema.validate(formsdata,{abortEarly:false})
axios.post("http://localhost:20201/api/blogs",formsdata).then(()=>{
console.log(formsdata);
      navigation("/adm/listblog")

setloading(false)
    }
).catch((err)=>{setloading(false)
  console.log(err)})
    }catch(e){setloading(false)

      console.log(e.inner);
      // navigation("/insertblog")
      seterrors(e.inner);
    }finally{
      // navigation("/adm/listblog")

    }

  }
  
  return (
    <div>
      <h2>Post a new article</h2>
    {!loading ? (
      <form onSubmit={handlesubmit} action="#">
        <div className="formdivInsertInput">
          <TextField
            id="standard-helperText"
            label="title"
            value={formsdata.title}
            name="title"
            helperText="Some important text"
            variant="standard"
            onChange={handleChange}
          />
         

          <textarea             onChange={handleChange}
  value={formsdata.desc} name="desc" id="standard-helperText" cols="30" rows="10"></textarea>
          <p>
            <input
              onChange={handleChange}
              type="radio"
              id="test1"
              name="status"
              value="0"          
                  
            />
            <label htmlFor="test1">inactive</label>

            <input
              onChange={handleChange}
              type="radio"
              id="test2"
              value="1"
              name="status"
            />
            <label htmlFor="test2">active</label>
          </p>
          {errors.map((prg,index)=>(
            <p key={index} className="errormessagedivInsertInput">*{prg.message}</p>
))}
        </div>
        <button className="buttondivInsertInput">send</button>
      </form>
      ):(
        <Spinner/>
      )
}
    </div>
  );
}

export default InserBlog;
