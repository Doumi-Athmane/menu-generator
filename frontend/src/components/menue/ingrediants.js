import React from 'react';
import "./ingrediant.css"
import ListIngrediant from './ListIngrediant'

export default function ingrediants(props) {
    return (
        <div  className='ing'>
              <h1>Ingrediants : </h1>
                <hr/>
              <ListIngrediant ingrediants = {props.ingrediants}/>


            
        </div>
    )
}