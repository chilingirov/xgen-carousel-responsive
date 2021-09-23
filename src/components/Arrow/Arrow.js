import React from "react";
import leftArrow from "../../static/arrow_left.svg";
import rightArrow from "../../static/arrow_right.svg";
import "./arrow.css";


const Arrow = ({ direction, onClick }) => {
    return (
        <div className="arrow-container" onClick={onClick}>
            <img className="arrow" alt={direction === "left" ? "left arrow" : "right-arrow"} src={direction === "left" ? leftArrow : rightArrow} />
        </div>
    );
}

export default Arrow;