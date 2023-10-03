import React, { useEffect, useState } from 'react';

function News() {

    const [name,setName] =useState("")

    useEffect( () => {
        console.log('UseEffect called');

    }, [])

    console.log("Rendring News");

    
  return (
    
    <div>

        <img src='' alt='NewsImages'/>
        <h1>News Title</h1>
        <h1>News Description</h1>
        <h1>News Data</h1>
        
    </div>
  );
}

export default News;