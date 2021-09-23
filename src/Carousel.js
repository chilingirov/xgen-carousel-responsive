import React , {useState} from "react";
import Container from "./components/Container/Container"
import Listings from "./components/Listings/Listings";
import Arrow from "./components/Arrow/Arrow"
import {listingsData} from "./listings-data.js"


function Carousel() {
  const [activeIndex,setActiveIndex] = useState(0);
//Left click handler
  const handleClickLeft = () => {
    //We check if the index is bigger than 0, if it is we subtract 1, if not we set it to the length of the list minus 4 (As per your request)
    if(activeIndex>0){
          setActiveIndex(current=>current-1);
      } else {
        setActiveIndex(listingsData.length-4);
      }
  }
  //Right click handler
   const handleClickRight = () => {
     //We check if the active index plus the 4 required listings are less than the length of the list, if it is we add 1 to the active index, if not we set it to 0
    if(activeIndex+4<listingsData.length){
          setActiveIndex(current=>current+1);
      } else {
        setActiveIndex(0);
      }
  }
  return (
    <Container>
      <Arrow direction="left" onClick={handleClickLeft}/>
      <Listings listings={listingsData} size={4} activeIndex={activeIndex}/>
      <Arrow direction="right" onClick={handleClickRight}/>
    </Container>
  );
}

export default Carousel;
