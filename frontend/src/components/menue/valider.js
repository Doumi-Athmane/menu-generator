import React from 'react'
import './btn.css'

export default function Valider({onClick}) {
    return (
        <div className='valider' >
             <button onClick={onClick}>
                Valider 
             </button>
        </div>
       
    )
}