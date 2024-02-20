import Cards from './Cards'

// Create an Array Of Objects


const Sdata = [
    {
    imgsrc:"https://c4.wallpaperflare.com/wallpaper/294/512/920/tv-show-stranger-things-caleb-mclaughlin-charlie-heaton-wallpaper-preview.jpg",
    category :'Netflix',
    seriesname :'Stranger Things',
    link : 'https://www.netflix.com/in/title/80057281',
    
    },
    {
        imgsrc:"https://c4.wallpaperflare.com/wallpaper/261/837/119/game-of-thrones-series-throne-power-wallpaper-preview.jpg",
        category : 'HBO',
        seriesname : 'Game of Thrones',
        link : 'https://www.jiocinema.com/tv-shows/game-of-thrones/3739477',
   },
   {
    imgsrc:"https://c4.wallpaperflare.com/wallpaper/529/888/855/squid-game-tv-hd-wallpaper-preview.jpg",
    category : 'Netflix',
    seriesname : 'Squid Game',
    link : 'https://www.netflix.com/in/title/81040344',
   },
   {
    imgsrc:"https://c4.wallpaperflare.com/wallpaper/895/242/524/breaking-bad-walter-white-bryan-cranston-yellow-background-wallpaper-preview.jpg",
    category :'Netflix',
    seriesname : 'Breaking Bad',
    link :'https://www.netflix.com/in/title/70143836',
    },
    {
    imgsrc:'https://c4.wallpaperflare.com/wallpaper/763/356/999/money-heist-comic-la-casa-de-papel-comic-art-hd-wallpaper-preview.jpg',
    category :'Netflix',
    seriesname :'Money Heist',
    link : 'https://www.netflix.com/in/title/80192098',
 },
 {
    imgsrc:'https://c4.wallpaperflare.com/wallpaper/196/846/456/mystic-dark-the-series-darkness-time-travel-hd-wallpaper-preview.jpg',
    category :'Netflix',
    seriesname :'Dark',
    link : 'https://www.netflix.com/in/title/80100172',
 }
]

const cardloop= (val) => {
    return(
        <Cards imgsrc={val.imgsrc}
        category = {val.category}
        seriesname = {val.seriesname}
        link = {val.link}
        /> 
    );
}
export {Sdata , cardloop};