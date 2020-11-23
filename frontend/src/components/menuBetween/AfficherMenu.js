import React, { Component } from 'react';
import './AfficherMenu.css'
import Menu from '../menu'
import left from '../../assets/left.svg'
import right from '../../assets/right.svg'
import {
    BrowserRouter as Router,
    Link,
    useLocation
  } from "react-router-dom";

  function useQuery() {
    console.log(useLocation().search)

    return new URLSearchParams(useLocation().search);
  }



export default function menuBetween (props) {

    

    let query = this.useQuery();
    


        return (
            <div className='page'>
                
                <div className ='BigTitle'>
                   <h1>Menus entre &nbsp;  '{query.get("date1")}'&nbsp;  et&nbsp; '{props.date2}'</h1>
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


