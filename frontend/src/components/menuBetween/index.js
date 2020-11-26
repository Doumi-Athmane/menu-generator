import React, { Component } from 'react';
import Button from '../button'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './index.css'


class index extends Component {
    
   
    state = {
        date1 :new Date(),
        date2 : new Date()
    }
    
  
    callDay_debut = (clikedDay) =>  this.setState({ date1 :clikedDay.getFullYear() + "-"+ parseInt(clikedDay.getMonth()+1) +"-"+clikedDay.getDate() }); 
    callDay_fin = (clikedDay) =>  this.setState({ date2 : clikedDay.getFullYear() + "-"+ parseInt(clikedDay.getMonth()+1) +"-"+clikedDay.getDate() }); 
    

    render() {
        
        return (


            <div className='allpage'>
                <div className='BigTitle'>
                        <h2>Menu</h2>
                </div>
                <div className='calenders'>
                    <div className='calender1'>
                        <h1>Choisir la premiére date</h1>
                        <div className='Calendar'>
                        <Calendar 
                                onClickDay={this.callDay_debut}
                        /></div>
                    </div>
                    <div className='calender1'>
                        <h1>Choisir la derniére date </h1>
                        <div className='Calendar'>
                        <Calendar 
                            onClickDay={this.callDay_fin}
                        /></div>
                    </div>
                </div>
                <div className='rechercher'>

                    <Button label = 'Rechercher'  link ={`/menuBetween/?date1=${this.state.date1}&date2=${this.state.date2}`}  date1 = {this.state.date1 ? (this.state.date1) :''}  date2={this.state.date2 ? (this.state.date2) :''}/>

                </div>
                
            </div>
        );
    }
}

export default index;
