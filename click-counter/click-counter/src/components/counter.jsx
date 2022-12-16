import React from "react";
import "../stylesheets/counter.css"

function Counter ({ numOfClicks }) {
    return (
        <div className="counter">
            { numOfClicks }
        </div>
    );
}

export default Counter;