import React from 'react'
import './button.css'


export default function Button({ label, onClick }) {
    return (
        <button className="myBtn" onClick={onClick}>
            {label}
        </button>

    )
}