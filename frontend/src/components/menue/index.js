import React, { Component } from 'react';
import './index.css'
import Menu from '../menu'
import Valider from './valider'
import Refresh from './refresh'
import Ingrediants from './ingrediants'




const test1 = [
    {nom :'Ingredian1' },
    {nom :'Ingrediant2'},
    {nom :'Ingrediant3' },
    {nom :'Ingrediant4' },
    {nom :'Ingrediant5' },
    {nom :'Ingrediant6' },
    {nom :'Ingrediant7' },
    {nom :'Ingrediant8'},
    {nom :'Ingredian1' },
    {nom :'Ingrediant2'},
    {nom :'Ingrediant3' },
    {nom :'Ingrediant4' },
    {nom :'Ingrediant5' },
    {nom :'Ingrediant6' },
    {nom :'Ingrediant7' },
    {nom :'Ingrediant8'},
    

    
]

const entrees =[

    {nom :'entree1' , prix : 200},
    {nom :'entree2' , prix : 200},
    {nom :'entree3' , prix : 200},
    {nom :'entree4' , prix : 200},
    {nom :'entree5' , prix : 200},
    {nom :'entree6' , prix : 200},

]


const principals = [
    {nom :'principal1' , prix : 200},
    {nom :'principal2 ' , prix : 200},
    

]


const desserts = [
    {nom :'dssrt1' , prix : 200},
    {nom :'dssrt2' , prix : 200},
    {nom :'dssrt3' , prix : 200},
    {nom :'dssrt4' , prix : 200},
    {nom :'dssrt5' , prix : 200},
    {nom :'dssrt6' , prix : 200},

]
class PageMenu extends Component {



    state = {
        date : '2020-11-10'
    }

    render() {
        return (
            <div className='menupage'>

                <div className ='BigTitle'>

                    <h1>Menu de jour : {this.state.date} </h1>
                    

                </div>

                <div className ='contenue'>
                    <div className = 'cotéMenu'>
                        <Menu entree ={entrees} principal={principals} dessert={desserts}/>
                        
                        <div className ='valide'>
                           <Valider/>
                           <Refresh/>
                           
                        </div>

                    </div>

                    <div className ='ingrediantss'>
                        <Ingrediants ingrediants ={test1}/>
                    </div>
                    
                </div>

                

                
            </div>
        );
    }
}

export default PageMenu;
