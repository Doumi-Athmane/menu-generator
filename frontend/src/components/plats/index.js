import React from 'react'
import Table from './tableau'
import Button from '../button'

export default function Plats(props) {
    return (
        <div>
            <h3>Plats</h3>
            <Table />
            <div>
                <Button label="Ajouter" />
            </div>
        </div>
    )
}