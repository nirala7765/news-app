import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';

function NewsComponent() {

  const [newData,setNewData] = useState([])

  useEffect(()=>{

    (async function f1(){

      let url = "https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=8cfd02f9e44f7aae1408fda3bd215ba5";

      const response = await fetch(url);

      const data = await response.json();

      console.log(data);

      setNewData(data["articles"]);



    })();

  });
  return (
    <div>


      {newData?.map((item)=>{
        return <NewsCard data = {item}/>;

      })}

      

    </div>
  )
}

export default NewsComponent