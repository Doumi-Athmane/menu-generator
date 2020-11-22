import React from 'react'
import { Link } from 'react-router-dom'
import './button.css'


export default function Button({label , link , onClick}) {
    return link ?
        (
            <Link to={link} className="myBtn">
                {label}     
            </Link>
        ): (
            <button className="myBtn" onClick={onClick}>
                {label}
            </button>
        )
}