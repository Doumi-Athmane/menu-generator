import React from 'react'
import Button from '../button'
import './btn.css'

export default function Valider({onClick}) {
    return (
        <div className='valider' >
             <Button onClick={onClick} label="Valider" /> 
        </div>
       
    )
}