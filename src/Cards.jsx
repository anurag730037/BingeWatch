import React from "react";

function Cards(props){
    return(
    <>
    < div className="container">
        <div className='cards'>
      
          <div className='card flex'>
            <img src= {props.imgsrc} alt='poster' className='card_img' />
              <div className='card_info'>
                <span className='card_category'> {props.category} </span>
                <h3 className='card_title'>{props.seriesname}</h3>
                <a href={props.link} target='_blank'> <button> Watch Now</button> </a>
              </div>
      
          </div>
      
        </div>

        </div>
    </>
    )
}

export default Cards ;