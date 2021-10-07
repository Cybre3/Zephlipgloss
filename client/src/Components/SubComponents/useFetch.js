import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [url]);

  console.log("This is data", data);
  return { data };
};

export default useFetch;