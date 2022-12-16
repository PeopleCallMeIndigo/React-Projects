import React from "react";
import "../stylesheets/Testimony.css"

class Testimony extends React.Component {
    render () { 
        return (
        <div className="testimony-container">
            <img 
                src={require(`../images/testimony-${this.props.img}.png`)} 
                alt={`Testimony ${this.props.name}`}
                className="testimony-img"
            />
            <div className="testimony-text-container">
                <p className="testimony-name"><b>{this.props.name}</b> in {this.props.country}</p>
                <p className="testimony-charge">{this.props.charge} at <b>{this.props.company}</b></p>
                <p className="testimony-text">"{this.props.testimony}"</p>
            </div>
        </div>
        )
    }
}

export default Testimony;