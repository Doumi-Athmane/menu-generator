import React from 'react'
import Button from '../button'

export default function Refresh() {
    return (
        <div className='valider refresh'>
             <Button onClick={()=>window.location.reload()} label="Refresh" />
        </div>
    )
}