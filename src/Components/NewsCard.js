import React from 'react'
import '../Styles/NewsCard.css';

function NewsCard(props) {

    let date = new Date(props.data.publishedAt);



  return (
    <>
    <div className='newsCard'>

        <img 
        className='card-Image'
          src={props.data.image}
          alt=''
        />


        <div className='card-content'>

            <h2 className='card-title'>{props.data.title}</h2>
            <p className='card-description'>{props.data.description}</p>
            <p className='News-content'>{props.data.content}</p>


            <h5 className='time-Stamp'>{date.toString()}</h5>

        </div>



    </div>
    
    </>
  )
}

export default NewsCard;