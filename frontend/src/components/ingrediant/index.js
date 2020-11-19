import React, { Component } from 'react';
import './index.css'
import ChercherIng from './chercherIngrediant'
import ListIngrediants from './listIngrediants'
import AjouterIngrediant from './ajouterIngrediant'


const ing =[
    {nom  : 'ingrediant1'},
    {nom  : 'ingrediant2'},
    {nom  : 'ingrediant3'},
    {nom  : 'ingrediant4'},
    {nom  : 'ingrediant5'},
    {nom  : 'ingrediant6'},
    {nom  : 'ingrediant1'},
    {nom  : 'ingrediant1'},
    {nom  : 'ingrediant1'},
    {nom  : 'ingrediant1'},
    {nom  : 'ingrediant1'},
    {nom  : 'ingrediant1'},
    {nom  : 'ingrediant1'},
    {nom  : 'ingrediant1'},
    {nom  : 'ingrediant1'},
    {nom  : 'ingrediant1'},
    {nom  : 'ingrediant1'},
    {nom  : 'ingrediant1'},
    {nom  : 'ingrediant1'},
    {nom  : 'ingrediant1'},
    {nom  : 'ingrediant1'},
]

class index extends Component {
    render() {
        return (
            <div className='allpage'>

                <div className='BigTitle'>

                    <h1>Ingrediants</h1>

                </div>

                <div className='contenu'>
                    <div className='listIngrediants'>
                        <div className='chercherIng'>
                            <ChercherIng/>
                        </div>
                        <div className='Title'>
                            <h1>Les ingrediants utilisées dans vos pats :</h1>
                            <hr/>
                        </div>

                        <div className='Elements'>
                            <ListIngrediants ingrediants={ing}/>
                        </div>

                    </div>
                    <div className='ligne'>
                        <hr/>

                    </div>
                    <div className='ajouterIngrediant'>
                        <AjouterIngrediant/>

                    </div>

                </div>
                
            </div>
        );
    }
}

export default index;
