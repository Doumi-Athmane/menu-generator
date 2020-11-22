import React, { Component } from 'react';
import Plats from './menue/ListeType'
import './menue/index.css'

const test = [
    {nom :'entree1' , prix : 200},
    {nom :'entree1' , prix : 200},
    {nom :'entree1' , prix : 200},
    {nom :'entree1' , prix : 200},
    {nom :'entree1' , prix : 200},
    {nom :'entree1' , prix : 200},
    
]

class menu extends Component {


    state = {
        id : '',
    }

    componentDidMount ()  {
            this.setState({

                id : this.props.id 
                

            }) 
    }

    render() {
        return (
            <div className ='menu'>
                            <br/>
                            <Plats plat={test} type = {'entrees'} />
                            <hr/>

                            
                            <Plats plat={test} type = {'principals'}/>

                            <hr/>

                            <Plats plat={test} type = {'desserts'}/>


                        </div>
        );
    }
}

export default menu;
