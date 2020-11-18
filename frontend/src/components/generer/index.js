import React, { Component } from 'react'
import './index.css'
import List from './listCont'
import List2 from './doubleList'
import Button from '../button'
import Model from '../model'
import Fork from '../../assets/fork.svg'
import Spoon from '../../assets/spoon.svg'

const tempEntrees = [
    {name: 'item1', key: 1},
    {name: 'item2', key: 2},
    {name: 'item3', key: 3},
    {name: 'item4', key: 4},
    {name: 'item5', key: 5},
    {name: 'item6', key: 6},
    {name: 'item7', key: 7},
];

class Generer extends Component {
    constructor(props) {
        super(props);
        this.model = React.createRef();
        this.hide = this.hide.bind(this);
    }
    hide() {
        this.model.current.style.display = 'none';
    }
    render() {
        return (
            <div className="generer">
                <div className="title">
                    <h2>Generer un menu</h2>
                </div>
                <div className="entrees">
                    <List title="Entrees :" items={tempEntrees} model={this.model} />
                </div>
                <div className="barrier fork">
                    <img src={Fork} alt="fork" />
                </div>
                <div className="principal">
                    <List2 title="Principals :" items={tempEntrees} model={this.model} />
                </div>
                <div className="barrier spoon">
                    <img src={Spoon} alt="spoon" /> 
                </div>
                <div className="desserts">
                    <List title="Desserts :" items={tempEntrees} model={this.model} />
                </div>
                <div className="btns">
                    <Button label="Generer Menu" />
                </div>
                <div className="hidden" ref={this.model} onClick={this.hide}>
                    <Model title="Plat" />
                </div>
            </div>
        )
    }
}

export default Generer;