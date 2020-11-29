import React from 'react';
import "./ingrediant.css";
import delet from '../../assets/delete.svg'
import { supp_ingrediant} from '../../requests/ingrediant'




export default function Ingrediant(props) {
    return (
        
        <div className="ingrediant">
            <p>{props.nom}</p>
            <button onClick={ ()=> {
                        supp_ingrediant(props.id)
                        props.delete()
             }}>
                <img src={delet} alt="supprimer" />
            </button>
            
        </div>
    )
}
