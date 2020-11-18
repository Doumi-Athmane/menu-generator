import React, { useState } from 'react'
import { Modal } from 'react-overlays'
import './index.css'
import List from './listCont'
import List2 from './doubleList'
import Button from '../button'
import Plat from './plat'
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

function Generer() {
    const [show, setShow] = useState(false);

    const Backdrop = props => (<div className="hidden" {...props}></div>)

    return (
        <div className="generer">
            <div className="title">
                <h2>Generer un menu</h2>
            </div>
            <div className="entrees">
                <List title="Entrees :" items={tempEntrees} model={setShow} />
            </div>
            <div className="barrier fork">
                <img src={Fork} alt="fork" />
            </div>
            <div className="principal">
                <List2 title="Principals :" items={tempEntrees} model={setShow} />
            </div>
            <div className="barrier spoon">
                <img src={Spoon} alt="spoon" /> 
            </div>
            <div className="desserts">
                <List title="Desserts :" items={tempEntrees} model={setShow} />
            </div>
            <div className="btns">
                <Button label="Generer Menu" />
            </div>
            <Modal 
                show={show}
                onHide={() => setShow(false)}
                renderBackdrop={Backdrop}
                aria-labelledby="modal-label"
                className="modal"
            >
                <Plat />
            </Modal>
        </div>
    )
}

export default Generer;