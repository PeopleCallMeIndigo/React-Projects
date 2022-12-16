import React from "react";
import "../stylesheets/button-clear.css";

function buttonClear (props) {
    return (
        <button className='button-clear' onClick={ props.handleClear }>
        {props.children}
        </button>
    );
}

export default buttonClear;