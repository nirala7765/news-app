import React, { useEffect, useState } from 'react';

function News() {

  const [news, setNews] = useState([])

  useEffect(() => {
    (async function f1() {
      const response = await fetch(
        "https://gnews.io/api/v4/search?q=india&lang=en&country=us&max=10&apikey=8cfd02f9e44f7aae1408fda3bd215ba5"
      );
      const data = await response.json();

      setNews(data["articles"]);
    })();


  }, []);

  if (news.length === 0) {

    return (
      <img style={{ width: "250px" }} src='https://img.freepik.com/premium-vector/update-concept-application-loading-process-symbol-web-screen-vector-illustration-flat_186332-1253.jpg?w=2000' alt='Data Is loading process'

      />
    )

  }


  return (

    <div>

      <img style={{ width: "250px" }} src={news[0]["image"]} alt='NewsImages' />
      <h1>{news[0]["title"]} </h1>
      <p>{news[0]["description"]}</p>
      <p>{news[0]["content"]}</p>
      <h2>{news[0]["publishedAt"]}</h2>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <img style={{ width: "250px" }} src={news[1]["image"]} alt='NewsImages' />
      <h1>{news[1]["title"]} </h1>
      <p>{news[1]["description"]}</p>
      <p>{news[1]["content"]}</p>
      <h2>{news[1]["publishedAt"]}</h2>
      
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>


      <img style={{ width: "250px" }} src={news[2]["image"]} alt='NewsImages' />
      <h1>{news[2]["title"]} </h1>
      <p>{news[2]["description"]}</p>
      <p>{news[2]["content"]}</p>
      <h2>{news[2]["publishedAt"]}</h2>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <img style={{ width: "250px" }} src={news[3]["image"]} alt='NewsImages' />
      <h1>{news[3]["title"]} </h1>
      <p>{news[3]["description"]}</p>
      <p>{news[3]["content"]}</p>
      <h2>{news[3]["publishedAt"]}</h2>
      



      



    

   

      

       

    </div>
  );
}

export default News;