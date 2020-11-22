import React from 'react';
import "./ingrediant.css";
import delet from '../../assets/delete.svg'
import axios from 'axios'

const api = axios.create({
    baseURL : `http://localhost:3500/api/ingrediant/:id`
  })

export default function Ingrediant(props) {
    console.log(props.nomIngrediant)
    return (
        
        <div className="ingrediant">
            <p>{props.nom}</p>
            <a><img  src={delet} onClick={()=>{alert(props.id)}} /></a>
            
        </div>
    )
}
