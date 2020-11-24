import React, { useState, useEffect } from 'react';
import './AfficherMenu.css'
import Menu from '../menu'
import left from '../../assets/left.svg'
import right from '../../assets/right.svg'
import {
    
    useLocation
  } from "react-router-dom";
  



export default function MenuBetween () {


  let query = new URLSearchParams(useLocation().search);

    const [date1 ] = useState(query.get("date1"))
    const [date2 ] = useState(query.get("date2"))
    const [dateMenu , setDate] = useState(date1)


  function getPreviousDate ()  {
    const selectedDate  = dateMenu

    const currentDayInMilli = new Date(selectedDate)
    const oneDay = 1000 * 60 *60 *24
    const previousDayInMilli = currentDayInMilli - oneDay
    const previousDate = new Date(previousDayInMilli)
    setDate(previousDate.getFullYear() + "-"+ parseInt(previousDate.getMonth()+1) +"-"+previousDate.getDate())

  }

  function getNextDate (){
    const  selectedDate = dateMenu

    const currentDayInMilli = new Date(selectedDate)
    const oneDay = 1000 * 60 *60 *24
    const nextDayInMilli = currentDayInMilli.getTime() + oneDay
    const nextDate = new Date(nextDayInMilli)

    setDate(nextDate.getFullYear() + "-"+ parseInt(nextDate.getMonth()+1) +"-"+nextDate.getDate())

  }
  
   

   

      
    
    


        return (
            <div className='page'>
                
                <div className ='BigTitle'>
                   <h1>Menus entre &nbsp;  '{date1}'&nbsp;  et&nbsp; '{date2}'</h1>
                </div>
                
                <div className='LesMenus'>
                    <div className='haja'>
                      <a></a>
                      <a><img src={left} onClick={()=>{
                        if (new Date(dateMenu).getTime() < new Date(date1).getTime()+(1000 * 60 *60 *24)){
                          alert('Date inexistante ')
                        }else{
                          getPreviousDate()
                        }
                        
                        }} /></a> 
                    </div>
                     <div className ='menus'>
                         <Menu dateMenu={dateMenu} />

                     </div>
                    <div className='haja' >
                        <a></a>
                      <a ><img src={right} onClick={()=>{
                        if (new Date(dateMenu).getTime() > new Date(date2).getTime()-(1000 * 60 *60 *24)){
                          alert('Date inexistante  ')
                        }else{
                          getNextDate()
                        }
                        
                        }} /></a> 

                     </div>
                     
                </div>
                <div className = 'SecondTitle'>
                    
                    <h1> {dateMenu}</h1>

                </div>
            </div>
        );
    }


