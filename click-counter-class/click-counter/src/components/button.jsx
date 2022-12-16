import React from "react";
import "../stylesheets/button.css";

class Button extends React.Component {
    render () {
        return (
            <button
                className={ this.props.isClickButton ? "click-button" : "restart-button" }
                onClick={ this.props.handleClick}>
                {this.props.text}
            </button>
        );
    }
}

export default Button;