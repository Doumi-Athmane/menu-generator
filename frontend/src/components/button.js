import React from 'react'
import './button.css'

export default function Button(props) {
    return (
        

        <a href={props.link}className="myBtn">
            {props.label}
            
        </a>
    )
}