import React, { Component } from 'react'
import './index.css'
import List from './listCont'
import List2 from './doubleList'
import Button from './button'

const tempEntrees = [
    {name: 'item1'},
    {name: 'item2'},
    {name: 'item3'},
    {name: 'item4'},
    {name: 'item5'},
    {name: 'item6'},
    {name: 'item7'},
];

class Generer extends Component {
    render() {
        return (
            <div className="generer">
                <div className="title">
                    <h2>Generer un menu</h2>
                </div>
                <div className="entrees">
                    <List title="Entrees :" items={tempEntrees} />
                </div>
                <div className="fork">

                </div>
                <div className="principal">
                    <List2 title="Principals :" items={tempEntrees} />
                </div>
                <div className="spoon">

                </div>
                <div className="desserts">
                    <List title="Desserts :" items={tempEntrees} />
                </div>
                <div className="btns">
                    <Button label="Generer Menu" />
                </div>
            </div>
        )
    }
}

export default Generer;