import React, { useState, useEffect } from 'react'
import Modal from 'react-overlays/Modal'
import Table from './tableau'
import Button from '../button'
import Ajouter from './ajouter'
import plat from '../../requests/plat'
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

export default function Plats() {

    const [show, setShow] = useState(false);
    const [plats, setPlats] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let res = await plat();

            let arr = [];

            for (let i in res) {
                arr = [...arr, ...res[i].map(element => {
                    let type = element.type ? ` (${element.type})`: '';
                    element.nom +=  type;

                    return {...element, type: i}
                })]
            }

            setPlats(arr);
        }

        fetchData();
    })

    const Backdrop = props => (<div className="hidden" {...props}></div>)

    return (
        <div className="pagePlats">
            <div>
                <h3>Plats</h3>
            </div>
            <Table plats={plats} />
            <div className="btnCont">
                <Button label="Ajouter Nouveau" onClick={() => setShow(true)} />
            </div>
            <Modal 
                show={show}
                onHide={() => setShow(false)}
                renderBackdrop={Backdrop}
                aria-labelledby="modal-label"
                className="modal"
            >
                <Ajouter />
            </Modal>
        </div>
    )
}