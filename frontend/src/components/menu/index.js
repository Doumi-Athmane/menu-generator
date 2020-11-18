import React, { Component } from 'react';
import './index.css'
import Menu from '../menu'
import Valider from './valider'
import Refresh from './refresh'
import Ingrediants from './ingrediants'




const test1 = [
    {nom :'entree1' , prix : 200},
    {nom :'entree1' , prix : 200},
    {nom :'entree1' , prix : 200},
    {nom :'entree1' , prix : 200},
    {nom :'entree1' , prix : 200},
    {nom :'entree1' , prix : 200},
    {nom :'entree1' , prix : 200},
    {nom :'entree1' , prix : 200},
    {nom :'entree1' , prix : 200},
    {nom :'entree1' , prix : 200},

    {nom :'entree1' , prix : 200},
    {nom :'entree1' , prix : 200},
    {nom :'entree1' , prix : 200},
    {nom :'entree1' , prix : 200},
    {nom :'entree1' , prix : 200},
    {nom :'entree1' , prix : 200},

    
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
                        <Menu/>
                        
                        <div className ='valide'>
                           <Valider/>
                           <Refresh/>
                           
                        </div>

                    </div>

                    <div className ='ingrediant'>
                        <Ingrediants ingrediants ={test1}/>
                    </div>
                    
                </div>

                

                
            </div>
        );
    }
}

export default PageMenu;
