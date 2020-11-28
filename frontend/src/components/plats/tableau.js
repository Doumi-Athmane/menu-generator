import React, {useState, useEffect} from 'react'
/*import Dropdown from './dropdown'
import {Nom, Prix, Type } from './filter'*/
import Row from './row'
import Arrow from '../../assets/arrow-down-sign.svg'
import './tableau.css'

export default function Tableau({ plats, modifier, refresh }) {

    const [page, setPage] = useState(1)

    function modifyPage(offset) {
        const p = page + offset;
        const o = plats.length % 8 ? 1: 0;
        if (p < 1 || p > plats.length / 8 + o)
            return
        setPage(p)
    }

    const [platsPage, setPlatsPage] = useState(plats)

    useEffect(() => {
        setPlatsPage(plats.slice((page-1)*8, page*8))
    }, [page, plats])

    return (
        <div className="grid">
            <table>
                <tbody>
                    <tr>
                        <th>
                            Nom
                        </th>
                        <th>
                            Type
                        </th>
                        <th>
                            Prix 
                            {/*<Dropdown >
                                <Prix />
                            </Dropdown>*/}
                        </th>
                        <th></th>
                        <th></th>
                    </tr>
                    {platsPage && platsPage.map(e => (
                        <Row plat={e} key={e.idPlat} modifier={modifier} refresh={refresh} />
                    ))}
                </tbody>
            </table>
            <div className="paging">
                <button onClick={() => modifyPage(-1)}><img src={Arrow} alt="previous" /></button>
                {page}
                <button onClick={() => modifyPage(+1)}><img src={Arrow} alt="next" /></button>
            </div>
        </div>
    )
}