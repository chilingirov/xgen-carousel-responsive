import React from "react";
import ProductListing from "../ProductListing/ProductListing"
import "./listings.css"


function Listings({listings,activeIndex,size}) {
  return (
    <div className="listings-container">
      {listings.slice(activeIndex,activeIndex+size).map((listing,index)=>{
      return  <ProductListing key={index} image={listing.image} name={listing.name} price={listing.price}/>
      })}
    </div>
  );
}

export default Listings;
