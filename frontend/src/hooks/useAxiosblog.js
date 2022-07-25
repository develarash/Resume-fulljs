import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useAxios = (query) => {
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [res, setres] = useState();

  const navigation = useNavigate();

  const fetchData = async (id = "") => {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:20201/api/${query}/${id}`);
      setResponse(res.data);
    } catch (err) {
      setLoading(true);

      console.log(err.response.status);
      if (err.response.status === 404) {
        navigation("/404");
      }
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchData,
    response,
    loading,
    error,
  };
};

export default useAxios;
