import React from "react";
import "../stylesheets/counter.css"

class Counter extends React.Component {
    render () {
        return (
            <div className="counter">
                { this.props.numOfClicks }
            </div>
        );
    }
}

export default Counter;

