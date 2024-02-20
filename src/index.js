import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Cards from './Cards';
import {Sdata,cardloop} from './Sdata';

// const cardloop= (val) => {
//     return(
//         <Cards imgsrc={val.imgsrc}
//         category = {val.category}
//         seriesname = {val.seriesname}
//         link = {val.link}
//         /> 
//     );
// }


ReactDOM.render(
    <>
   
    <h1 className='heading_style'> Top Must Watch Series</h1>

   {Sdata.map(cardloop)}


   {/* { Sdata.map ((val) => {
       return(
        <Cards imgsrc={val.imgsrc}
        category = {val.category}
        seriesname = {val.seriesname}
        link = {val.link}
        />
         )
    }
    )
   } */}
   
    </>, document.getElementById('root')
   );


// METHOD 2--------------------------------------------------------------------------------------------------------------------------------------------------------   

//    ReactDOM.render(
//     <>
   
//     <h1 className='heading_style'>List of Top 5 Series</h1>
   
//     <Cards imgsrc={Sdata[0].imgsrc}
//     category = {Sdata[0].category}
//     seriesname = {Sdata[0].seriesname}
//     link = {Sdata[0].link}
//     />
    
//     <Cards imgsrc={Sdata[1].imgsrc}
//     category = {Sdata[1].category}
//     seriesname = {Sdata[1].seriesname}
//     link = {Sdata[1].link}
//     />
   
//    <Cards imgsrc={Sdata[2].imgsrc}
//     category = {Sdata[2].category}
//     seriesname = {Sdata[2].seriesname}
//     link = {Sdata[2].link}
//     />
   
//    <Cards imgsrc={Sdata[3].imgsrc}
//     category = {Sdata[3].category}
//     seriesname = {Sdata[3].seriesname}
//     link = {Sdata[3].link}
//     />
   
//    <Cards imgsrc={Sdata[4].imgsrc}
//     category = {Sdata[4].category}
//     seriesname = {Sdata[4].seriesname}
//     link = {Sdata[4].link}
//     />
   
//     </>, document.getElementById('root')
//    );

// METHOD 2-------------------------------------------------------------------------------------------------------------------------------------------

// ReactDOM.render(
//  <>

//    <h1 className='heading_style'>List of Top 5 Series</h1>

//  <Cards imgsrc="https://c4.wallpaperflare.com/wallpaper/449/429/294/poster-stranger-things-netflix-wallpaper-preview.jpg"
//  category = 'Netflix'
//  seriesname = 'Stranger Things'
//  link = 'https://www.netflix.com/in/title/80057281'
//  />
 
//  <Cards imgsrc="https://c4.wallpaperflare.com/wallpaper/261/837/119/game-of-thrones-series-throne-power-wallpaper-preview.jpg"
//  category = 'HBO'
//  seriesname = 'Game of Thrones'
//  link = 'https://www.jiocinema.com/tv-shows/game-of-thrones/3739477'
//  />

//  <Cards imgsrc="https://wallpapers.com/images/featured/squid-game-iphone-tzhqipo31ze1pvg2.webp"
//  category = 'Netflix'
//  seriesname = 'Squid Game'
//  link = 'https://www.netflix.com/in/title/81040344'
//  />

//  </>, document.getElementById('root')
// );