import React, { useState, useEffect } from 'react'
import Modal from 'react-overlays/Modal'
import Table from './tableau'
import Button from '../button'
import Ajouter from './ajouter'
import Modifier from './modifier'
import {plat as getPlat} from '../../requests/plat'
import './index.css'

export default function Plats() {

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [plat, setPlat] = useState({})
    const [plats, setPlats] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await getPlat();
            
            let arr = [];
            for (let i in res) {
                arr = [...arr, ...res[i].map(e => {
                    const type = e.type? ` (${e.type})`: '';
                    e.nom += type;
                    return {...e, type: i};
                })]
            }

            setPlats(arr)
        }
        fetchData()
    })

    function showModifier(plat) {
        setShow2(true)
        console.log(plat)
        setPlat(plat)
    }

    const Backdrop = props => (<div className="hidden" {...props}></div>)

    return (
        <div className="pagePlats">
            <div>
                <h3>Plats</h3>
            </div>
            <Table plats={plats} modifier={showModifier} />
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
            <Modal 
                show={show2}
                onHide={() => setShow2(false)}
                renderBackdrop={Backdrop}
                aria-labelledby="modal-label"
                className="modal"
            >
                <Modifier plat={plat} />
            </Modal>
        </div>
    )
}