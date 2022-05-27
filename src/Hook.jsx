import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Hook = (URL) => {
  const [data, setData] = useState([]);

  const fetchData = async (URL) => {
    const response = await axios.get(URL);
    const responseString = JSON.stringify(response.data);
    console.log(responseString);
    setData(response.data);
  };

  useEffect(() => {
    fetchData(URL, setData);
  }, []);

  return data;
};

export default Hook;
