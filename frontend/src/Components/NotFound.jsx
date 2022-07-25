import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigation = useNavigate();
  const [counter, setbCounter] = useState(0);

 
  
  useEffect(() => {
   

    const timer = setTimeout(() =>navigation("/"), 6000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {counter}
        <h1>404</h1> 
            <h4>NotFound</h4>
        </div>
  )

}

export default NotFound