import React, { Component } from 'react';
import './ListePlat.css'
import ListPlat from './ListPlat'




class ListePlat extends Component {
    
   

    render() {
        console.log(this.props.plat);
        return (
            <div className='listePlat'>
                <div className='titleType'>
                   <h1>Nos {this.props.type} : </h1>
                </div>

                <div className = 'contenu'> 
                   <ListPlat plats ={this.props.plat } />
                </div>
                
                
                
                

            </div>
        );
    }
}

export default ListePlat;
