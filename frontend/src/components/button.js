import React from 'react'
import './button.css'

export default function Button({ label }) {
    return (
        <a href="google.com" className="myBtn">
            {label}
        </a>
    )
}