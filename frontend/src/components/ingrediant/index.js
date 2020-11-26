import React, { Component } from 'react';
import './index.css'
//import ChercherIng from './chercherIngrediant'
import ListIngrediants from './listIngrediants'
import AjouterIngrediant from './ajouterIngrediant'
import {list_ingrediants } from '../../requests/ingrediant'


class index extends Component {

    state = {
            Les_ingrediants : []
           }
                
    constructor() {
        super()
        let GetIng = async () => {
            this.setState({ Les_ingrediants : await list_ingrediants()})    
        }  
       GetIng()
       this.deleteIng = this.deleteIng.bind(this)
       
    }

    deleteIng(id) {
        this.setState({Les_ingrediants: this.state.Les_ingrediants.filter(e => e.idIngrediant !== id)})
    }

    render() {
        return (
            <div className='allpage'>

                <div className='BigTitle'>

                    <h2>Ingrediants</h2>

                </div>

                <div className='contenu'>
                    <div className='listIngrediants'>
                        {/* <div className='chercherIng'>
                            <ChercherIng/>
                            </div> */}  
                        <div className='Title'>
                            <h1>Les ingrediants utilisées dans vos pats :</h1>
                            <hr/>
                        </div>

                        <div className='Elements'>
                            <ListIngrediants ingrediants={this.state.Les_ingrediants} delete={this.deleteIng} />
                        </div>

                    </div>
                    <div className='ligne'>
                        <hr/>

                    </div>
                    <div className='ajouterIngrediant'>
                        <AjouterIngrediant  />

                    </div>

                </div>
                
            </div>
        );
    }
}

export default index;
