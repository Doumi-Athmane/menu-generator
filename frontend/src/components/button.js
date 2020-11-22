import React from 'react'
import './button.css'


export default function Button({label , link , onClick}) {
    return (
        

        <a href={link} className="myBtn" onClick={onClick}>
            {label}
            
        </a>
/*
export default function Button({ label, onClick }) {
    return (
        <button className="myBtn" onClick={onClick}>
            {label}
        </button>

    )*/
    )
}