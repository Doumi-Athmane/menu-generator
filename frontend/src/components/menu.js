import React, { Component } from 'react';
import Plats from './menue/ListeType'
import './menue/index.css'
class menu extends Component {

    render() {
        return (
            <div className ='menu' >
                <Plats plat={this.props.entree} type = 'entrees' />
                <hr/>
                <Plats plat={this.props.principal} type = 'principals'/>
                <hr/>
                <Plats plat={this.props.dessert} type = 'desserts'/>
            </div>
        )
    }
}


export default menu;
