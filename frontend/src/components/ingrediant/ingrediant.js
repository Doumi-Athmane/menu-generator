import React from 'react';
import "./ingrediant.css";
import delet from '../../assets/delete.svg'

export default function Ingrediant(props) {
    return (
        <div className="ingrediant">
            <p>{props.nom}</p>
            <a><img  src={delet} onClick={()=>{alert(props.nom)}} /></a>
            
        </div>
    )
}
