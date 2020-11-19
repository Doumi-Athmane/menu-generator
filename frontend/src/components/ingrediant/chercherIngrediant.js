import React, { Component } from 'react';
import './chercherIngrediant.css'
import rechercher from '../../assets/rechercher.svg'

class chercherIngrediant extends Component {

    state ={
        nom : ''
    }



    render() {
        return (
            <div className='All'>
               
               
                <input placeholder="  Taper le nom de l'ingrediant"  onChange ={e => this.setState ({ nom : e.target.value})}/>
                <a ><img  src={rechercher} onClick={()=>{alert(this.state.nom)}} /></a>


  
                 
                
                
            </div>


        );
    }
}

export default chercherIngrediant;
