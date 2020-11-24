import React from 'react'
import './btn.css'
export default function Refresh() {
    return (
        <div className='refresh'>
             <button onClick={()=>window.location.reload()} >
                Refresh
             </button>
        </div>
    )
}