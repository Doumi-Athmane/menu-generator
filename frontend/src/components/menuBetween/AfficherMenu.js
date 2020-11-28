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

  const [dateMenu , setDate] = useState("")
  const [loading, setLoading] = useState(true)
  const [menus, setMenus] = useState([])
  const [plats, setPlats] = useState([])
  const [idMenu, setIdMenu] = useState(0)

  const query = new URLSearchParams(useLocation().search);
  const date1 = query.get("date1");
  const date2 = query.get("date2");

  useEffect(() => {
    async function Getid() {
      let t = await list_menu(date1, date2)
      setMenus(t);
      return t.length;
    }
    Getid().then(l => {
      setLoading(false);
      if (l === 0) {
        alert("aucun menu existe pour l'interval donné.")
      }
    }).catch(err => {})
  }, [date1, date2])

  useEffect(() => {
    async function GetMenu() {
      setPlats(await plat_menu(menus[idMenu].idMenu)) 
    }
    if (menus.length > idMenu) {
      GetMenu()
      setDate(menus[idMenu].date)
    }
  }, [menus, idMenu])

  function changeMenu(offset) {
    const newOff = idMenu + offset;
    if (newOff < 0 || newOff >= menus.length)
      alert('Date hors limite')
    else {
      setIdMenu(newOff)
    }
  }

  return (
      <div className='page'>
          
          <div className ='BigTitle'>
              <h1>Menus entre &nbsp;  '{date1}'&nbsp;  et&nbsp; '{date2}'</h1>
          </div>
          
          <div className='LesMenus'>
              <div className='haja'>
                <button onClick={()=> changeMenu(-1)}>
                  <img src={left} alt="left" />
                </button> 
              </div>
              <div className ='menus'>
                {loading?null:
                  (<Menu entree={plats.entree} principal={plats.principal} dessert={plats.dessert} />)
                }
              </div>
              <div className='haja' >
                <button onClick={()=> changeMenu(+1)}>
                  <img src={right} alt="right" />
                </button> 
              </div>
                
          </div>
          <div className = 'SecondTitle'>
              
              <h1> {new Date(dateMenu).toDateString()}</h1>

          </div>
      </div>
  );
}
