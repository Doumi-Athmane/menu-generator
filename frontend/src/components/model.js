import React, { Component } from "react"
import "./model.css"

class Model extends Component {
    render() {
        return (
            <div className="model">
                {this.props.item}
            </div>
        )
    }
}

export default Model;