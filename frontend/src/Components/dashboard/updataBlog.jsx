import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "./styles/updateblog.css";
import axios from "axios";
import { insertBlogSchema } from "../../validations/insertblogvalidation";
import Spinner from "../../helper/spinner";
function UpdateBlog() {
  const navigation = useNavigate();
  const { id } = useParams();

  const [errors, seterrors] = useState([]);
  const [loading, setloading] = useState(false);

  const [formsdata, setformsdata] = useState({
    title: "",
    desc: "",
    status: "",
  });
 

  const getUserById = async (id) => {
    const response = await axios.get(`http://localhost:20201/api/blogs/${id}`).then((res)=>{
        setformsdata({
            title: res.data.title,
    desc:  res.data.desc,
    status:  res.data.status,
          });

    }).catch((err)=>console.log(err));
  
  };
  const handleChange = (e) => {
    setformsdata({
      ...formsdata,
      [e.target.name]: e.target.value,
      
    });
  };

  useEffect(() => {
    getUserById(id);
  }, []);

  const handlesubmit = async (e) => {
    setloading(true);

    e.preventDefault();
    // console.log(formsdata)
    try {
      
      await insertBlogSchema.validate(formsdata, { abortEarly: false });
      axios
        .patch(`http://localhost:20201/api/blogs/${id}`, formsdata)
        .then((res) => {
          setloading(false);
          navigation("/adm/listblog");

        })
        .catch((err) => {
   
          console.log(err);
        });
    } catch (e) {

      console.log(e.inner);
      seterrors(e.inner);
    }
  };
 
  return (
    <div>
      <h2>Post a new article</h2>
      
      {loading ? (
                <Spinner />

      
      ) : (
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

          <textarea
            onChange={handleChange}
            value={formsdata.desc}
            name="desc"
            id="standard-helperText"
            cols="30"
            rows="10"
            
          ></textarea>
          <p>
            <input
              onChange={handleChange}
              type="radio"
              id="test1"
              name="status"
              checked={formsdata.status== 0}

              value="0"
      //         {formsdata.status="inactive" ?
      //     (
      //         checked
      //     ):(null)
      // }
            />
            <label htmlFor="test1">inactive</label>

            <input
              onChange={handleChange}
              type="radio"
              id="test2"
            
              checked={formsdata.status== 1}

              value="1"
              name="status"
            />
            <label htmlFor="test2">active</label>
          </p>
          {errors.map((prg) => (
            <p className="errormessagedivInsertInput">*{prg.message}</p>
          ))}
        </div>
        <button className="buttondivInsertInput">send</button>
      </form>
      )}
    </div>
  );
}

export default UpdateBlog;
