import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "./Components/Home/About";
import Projects from "./Components/Projects";
import Exprience from "./Components/Exprience";
import Educatios from "./Components/Educatios";
import Navigation from "./Components/Navigation";
import Questions from "./Components/Question";
import News from "./Components/News";
import Footer from "./Components/Footer";
import Blog from "./Components/blog/Blog";
import { useEffect, useState } from "react";
import SingleBlog from "./Components/blog/SingleBlog";
import NotFound from "./Components/NotFound";
import InserBlog from "./Components/dashboard/InserBlog";
import Login from "./Components/dashboard/login";
import Bloglist from "./Components/dashboard/bloglist";
import UpdateBlog from "./Components/dashboard/updataBlog";
import Register from "./Components/dashboard/register";
import axios from "axios";

function App() {
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    const response = await axios.get("http://localhost:20201/api/blogs");
    setblogs(response.data);
    console.log(response.data)
  };
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<About />} />

        <Route path="/Exprience" element={<Exprience />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Educatios" element={<Educatios />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/blog" element={<Blog  blogs={blogs}  />} />
        <Route exact path="/blog/:id" element={<SingleBlog />} />
        <Route path="/news" element={<News />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
        {/* dashboard */}
        <Route path="adm/insertblog" element={<InserBlog />} />
        <Route path="adm/listblog" element={<Bloglist />} />
        <Route path="adm/updateblog/:id" element={<UpdateBlog />} />
        <Route path="adm/register" element={<Register />} />
        <Route path="adm/login" element={<Login />} />
      </Routes>
      <Footer blogs={blogs} />
    </div>
  );
}

export default App;
