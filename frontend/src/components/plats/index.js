import React from 'react'
import Table from './tableau'
import Button from '../button'
import './index.css'

const tmpPlats = [
    {id: 1, nom: "salade", type: "dessert", prix: "500 DA"},
    {id: 2, nom: "salade", type: "dessert", prix: "500 DA"},
    {id: 3, nom: "salade", type: "dessert", prix: "500 DA"},
    {id: 4, nom: "salade", type: "dessert", prix: "500 DA"},
    {id: 5, nom: "salade", type: "dessert", prix: "500 DA"},
    {id: 6, nom: "salade", type: "dessert", prix: "500 DA"},
    {id: 7, nom: "salade", type: "dessert", prix: "500 DA"},
    {id: 8, nom: "salade", type: "dessert", prix: "500 DA"},
]

export default function Plats(props) {
    return (
        <div className="pagePlats">
            <div>
                <h3>Plats</h3>
            </div>
            <Table plats={tmpPlats} />
            <div className="btnCont">
                <Button label="Ajouter Nouveau" />
            </div>
        </div>
    )
}