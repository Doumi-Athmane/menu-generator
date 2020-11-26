import React, { useState, useEffect } from 'react';
import './AfficherMenu.css'
import {list_menu , plat_menu} from '../../requests/menu'
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
  const [loading, setLoading] = useState(true)
  const [plats, setPlats] = useState([])

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
  
  const Getid = async () => {
    let t = await list_menu(dateMenu)
  
    return t
  }  

  const GetMenu = async (e) => {
    if(e.length !== 0){
        setPlats(await plat_menu(e[0].idMenu)) 
    }
    
  }

  useEffect(() => {
    Getid().then(e => GetMenu(e).then(() => setLoading(false)))
  })

  return (
      <div className='page'>
          
          <div className ='BigTitle'>
              <h1>Menus entre &nbsp;  '{date1}'&nbsp;  et&nbsp; '{date2}'</h1>
          </div>
          
          <div className='LesMenus'>
              <div className='haja'>
                <button onClick={()=>{
                    if (new Date(dateMenu).getTime() < new Date(date1).getTime()+(1000 * 60 *60 *24)){
                      alert('Date inexistante ')
                    }else{
                      getPreviousDate()
                    }
                  
                  }}>
                  <img src={left} alt="left" />
                </button> 
              </div>
                <div className ='menus'>
                  {loading?null:
                    (<Menu entree={plats.entree} principal={plats.principal} dessert={plats.dessert} />)
                  }
                </div>
              <div className='haja' >
                <button onClick={()=>{
                  if (new Date(dateMenu).getTime() > new Date(date2).getTime()-(1000 * 60 *60 *24)){
                    alert('Date inexistante  ')
                  }else{
                    getNextDate()
                  }
                  
                  }}>
                  <img src={right} alt="left" />
                </button> 
              </div>
                
          </div>
          <div className = 'SecondTitle'>
              
              <h1> {dateMenu}</h1>

          </div>
      </div>
  );
}
