import { useEffect, useState } from 'react';
import axios from 'axios';

import { MessageArea } from "../assets/alert/alert";

export const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    axios.get(url, {
      headers: {
        auth: localStorage.getItem('token')
      }
    })
    .then((response) => {
      setData(response.data)
    })
    .catch((error) => {
      MessageArea.fire({title: error.response.data.message, icon: "error"});
    }) 
  }, [url])

  return (data)
}