import React, { Component } from 'react';
import './ajouterIngrediant.css'
import AjouterBtn from '../button'
import { ajouter_ingrediant} from '../../requests/ingrediant'



class ajouterIngrediant extends Component {

    state = {
        nom :''
    }

   

    render() {

        return (
            <div className='AjouterPage'>

                <div className='ajouterIng'>
                    <br/>
                    <br/>
                    <br/>
                    <h1>Ajouter ingrediant :</h1>
                    <hr/>
                </div>

                <div className='inputIng'>
                    
                    <div><p>Le nom de l'ingrediant :</p></div>
                    <input onChange ={e => this.setState ({ nom : e.target.value})} 
                           
                           
                    />

                </div>

                <div className='btnAjouter'>
                    <AjouterBtn label ='Ajouter' 
                       
                       onClick= {() =>{
                        ajouter_ingrediant(this.state.nom)
                        window.location.reload()}}

                        
                     />
                </div>

                
            </div>
        );
    }
}

export default ajouterIngrediant;
