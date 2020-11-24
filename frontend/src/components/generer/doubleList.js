import React, { Component } from 'react'
import List from './list'
import './doubleList.css'

class ListCont extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="doubleList">
                <div className="mainTitle">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="secondTitle">
                    <h4>poulet</h4>
                    {/*<hr />*/}
                    <h4>viande</h4>
                </div>
                <div className="lists">
                    <div className="list1">
                        <List items={this.props.items.filter(e => e.type === "poulet")} model={this.props.model} modifier={this.props.modifier} />
                    </div>
                    <hr />
                    <div className="list1">
                        <List items={this.props.items.filter(e => e.type === "viande")} model={this.props.model} modifier={this.props.modifier} />
                    </div>
                </div>
            </div>
        )
    }

}

export default ListCont;