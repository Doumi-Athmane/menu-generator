import React, { Component } from 'react';
import './index.css'
import ListePlat from './ListePlat'
class Menu extends Component {


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

                        <div className ='menu'>
                            <ListePlat/>
                            <ListePlat/>

                        </div>

                        <div className ='valide'>
                           
                        </div>

                    </div>

                    <div className ='ingrediant'>
                    </div>
                    
                </div>

                

                
            </div>
        );
    }
}

export default Menu;
