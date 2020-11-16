import React, { Component } from 'react'
import List from './list'
import './listCont.css'

class ListCont extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="container">
                <div className="titre">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="list">
                    <List items={this.props.items} />
                </div>
            </div>
        )
    }

}

export default ListCont;