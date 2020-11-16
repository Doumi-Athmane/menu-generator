import React, { Component } from 'react';
import './ListePlat.css'
import Plat from './Plat'



class ListePlat extends Component {
    
    state = {
        type :'entrees'
    }

    render() {
        return (
            <div className='listePlat'>
                <div className='type'>
                   <h1>Nos {this.state.type} : </h1>
                </div>

                <div className = 'contenu'> 
                   <Plat />
                </div>
                
                
                
                

            </div>
        );
    }
}

export default ListePlat;
