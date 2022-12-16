import React from "react";
import "../stylesheets/Testimony.css"

function Testimony(props) {
    return (
        <div className="testimony-container">
            <img 
                src={require(`../images/testimony-${props.img}.png`)} 
                alt={`Testimony ${props.img} Picture`}
                className="testimony-img"
            />
            <div className="testimony-text-container">
                <p className="testimony-name"><b>{props.name}</b> in {props.country}</p>
                <p className="testimony-charge">{props.charge} at <b>{props.company}</b></p>
                <p className="testimony-text">"{props.testimony}"</p>
            </div>
        </div>
    );
}

export default Testimony;