import React from 'react';
import "./productListing.css";


const ProductListing =({image,name,price})=>{
    return (
        <div className="listing">
            <img className="image" alt={name} src={image}/>
            <p className="product _name">{name}</p>
            <p className="product _price">{price}</p>
        </div>
    )
}

export default ProductListing;