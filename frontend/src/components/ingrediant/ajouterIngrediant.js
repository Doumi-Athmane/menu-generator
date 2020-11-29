import React, { Component } from 'react';
import './ajouterIngrediant.css'
import AjouterBtn from '../button'
import { ajouter_ingrediant} from '../../requests/ingrediant'



class ajouterIngrediant extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nom :''
        }
    }

    

    render() {

        return (
            <div className='AjouterPage'>
                <div className='ajouterIng'>
                    <h1>Ajouter ingrediant :</h1>
                    <hr/>
                </div>

                <div className='inputIng'>
                    
                    <div><p>Le nom de l'ingrediant :</p></div>
                    <input onChange={e => this.setState ({ nom : e.target.value})} value={this.state.nom} />

                </div>

                <div className='btnAjouter'>
                    <AjouterBtn label ='Ajouter' 
                        onClick= {() =>{
                            if (this.state.nom === "") {
                                alert("le nom est vide.")
                                return
                            }
                            ajouter_ingrediant(this.state.nom)
                            .then(e => {this.setState({ nom: ""});this.props.refresh()})
                            .catch(e => console.log(e))
                        }}
                    />
                </div>

                
            </div>
        );
    }
}

export default ajouterIngrediant;
