import React, { Component } from 'react';
import './index.css'
import Menu from '../menu'
import left from '../../assets/left.svg'
import right from '../../assets/right.svg'


export default function menuBetween (props) {

    
        return (
            <div className='page'>
                
                <div className ='BigTitle'>
                   <h1>Menus entre &nbsp;  '{props.date1}'&nbsp;  et&nbsp; '{props.date2}'</h1>
                </div>
                
                <div className='LesMenus'>
                    <div className='haja'>
                      <a></a>
                      <a><img src={left} onClick={()=>{alert('hello')}} /></a> 
                    </div>
                     <div className ='menus'>
                         <Menu id={props.id}/>

                     </div>
                    <div className='haja' >
                        <a></a>
                      <a ><img src={right} onClick={()=>{alert('hello')}} /></a> 

                     </div>
                     
                </div>
                <div className = 'SecondTitle'>
                    
                    <h1> {props.date}</h1>

                </div>
            </div>
        );
    }


