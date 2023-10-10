import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';
import '../Styles/NewsComponent.css'


let inputStyle = {
  width: "280px",
  padding : "10px",
  borderRadius : "5px",
  outline: "none",
  marginTop:"20px",
  marginBottom: "20px",
  marginLeft:"calc((80vw)/2)"

}

function NewsComponent() {

  const [newData, setNewData] = useState([]);
  const [search,setSearch]=useState('tech');

  useEffect(() => {

    (async function f1() {

      let url = 
      `https://gnews.io/api/v4/search?q=${search}&lang=en&country=us&max=10&apikey=6d7d20daa2c33c11dfdb6a2d918dc53b`;

      const response = await fetch(url);

      const data = await response.json();

      console.log(data);

      setNewData(data["articles"]);



    })();

  }, [search]);
  return (


    <>

      <input
      style={inputStyle}
      placeholder='Search Your News!'

      onChange={(e)=>{
        setSearch(e.target.value);

      }}

      
      />





      <div className='News-Component'>


        {newData?.map((item) => {
          return <NewsCard data={item} />;

        })}



      </div>

    </>

  )
}

export default NewsComponent