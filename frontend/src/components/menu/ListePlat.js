import React, { Component } from 'react';
import './ListePlat.css'
import Plat from './Plat'



class ListePlat extends Component {
    
    state = {
        type :'entrees',
        nom : 'entree1',
        prix : ''
    }

    render() {
        return (
            <div className='listePlat'>
                <div>
                   <h1>Nos {this.state.type} : </h1>
                </div>
            
                <Plat/>
                <br/>
                <Plat/>

            </div>
        );
    }
}

export default ListePlat;
