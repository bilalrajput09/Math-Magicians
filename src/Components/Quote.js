import { useEffect, useState } from 'react';

const Qoute = () => {
  const [qouteResult, setQouteResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://api.api-ninjas.com/v1/quotes?category=happiness'
      , {
        method: "GET", 
        headers:
      });
      const json = await res.json();
      setQouteResult(json);
      console.log(qouteResult);
    };

    fetchData();
  }, [setQouteResult]);
};

export default Qoute;
