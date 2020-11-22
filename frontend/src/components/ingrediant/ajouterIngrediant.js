import React, { Component } from 'react';
import './ajouterIngrediant.css'
import AjouterBtn from '../button'


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
                    <input onChange ={e => this.setState ({ nom : e.target.value})}/>

                </div>

                <div className='btnAjouter'>
                    <AjouterBtn label ='Ajouter' />
                </div>

                
            </div>
        );
    }
}

export default ajouterIngrediant;
