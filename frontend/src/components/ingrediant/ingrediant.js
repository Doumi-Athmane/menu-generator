import React from 'react';
import "./ingrediant.css";
import delet from '../../assets/delete.svg'
import axios from 'axios'
import { supp_ingrediant} from '../../requests/ingrediant'


const api = axios.create({
    baseURL : `http://localhost:3500/api/ingrediant/:id`
  })

export default function Ingrediant(props) {
    return (
        
        <div className="ingrediant">
            <p>{props.nom}</p>
            <a><img  src={delet}
             onClick={ ()=> {
                        supp_ingrediant(props.id)
                        props.delete()
             }} /></a>
            
        </div>
    )
}
