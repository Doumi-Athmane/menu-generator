import React, { useState, useEffect } from 'react'
import { Modal } from 'react-overlays'
import './index_temp.css'
import List from './listCont'
import List2 from './doubleList'
import Button from '../button'
import Plat from './plat'
import getPlat from '../../requests/generer'
import Fork from '../../assets/fork.svg'
import Spoon from '../../assets/spoon.svg'


function Generer() {
    const [show, setShow] = useState(false);
    const [entree, setEntree] = useState([])
    const [principal, setPrincipal] = useState([])
    const [dessert, setDessert] = useState([])
    const [plat, setPlat] = useState({}); 
    const [platsSupp, setPlatsSupp] = useState([])

    useEffect(() => {
        async function fetchData() {
            const plats = await getPlat()

            setEntree(plats.entree)
            setPrincipal(plats.principal)
            setDessert(plats.dessert)
        }
        fetchData().catch(() => {})
    }, [])

    const modif = {
        addPlat: id => setPlatsSupp([...platsSupp, id]),
        delPlat: id => setPlatsSupp(platsSupp.filter(e => e !== id))
    }

    function showModal(plat) {
        setShow(true)
        setPlat(plat)
    }

    const Backdrop = props => (<div className="hidden" {...props}></div>)

    return (
        <div className="generer">
            <div className="title">
                <h2>Generer un menu</h2>
            </div>
            <div className="slider">
                <div className="slide entrees">
                    <List title="Entrees :" items={entree} model={showModal} modifier={modif} />
                </div>
                <div className="barrier fork">
                    <img src={Fork} alt="fork" />
                </div>
                <div className="slide principal">
                    <List2 title="Principals :" items={principal} model={showModal} modifier={modif} />
                </div>
                <div className="barrier spoon">
                    <img src={Spoon} alt="spoon" /> 
                </div>
                <div className="slide desserts">
                    <List title="Desserts :" items={dessert} model={showModal} modifier={modif} />
                </div>
            </div>
            <div className="btns">
                <Button label="Generer Menu" link={`/menuJour?plats=${platsSupp}`} />

            </div>
            <Modal 
                show={show}
                onHide={() => setShow(false)}
                renderBackdrop={Backdrop}
                aria-labelledby="modal-label"
                className="modal"
            >
                <Plat plat={plat} />
            </Modal>
        </div>
    )
}

export default Generer;