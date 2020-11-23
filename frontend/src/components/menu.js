import React, { Component } from 'react';
import Plats from './menue/ListeType'
import './menue/index.css'
import {list_menu , plat_menu} from '../requests/menu'


const test = [
    {nom :'entree1' , prix : 200},
    {nom :'entree1' , prix : 200},
    {nom :'entree1' , prix : 200},
    {nom :'entree1' , prix : 200},
    {nom :'entree1' , prix : 200},
    {nom :'entree1' , prix : 200},
    
]

class menu extends Component {


    

     
    Getid = async () => {
       let t = await list_menu(this.props.dateMenu)
       // console.log(list_menu(this.props.dateMenu))
        return t
    }  

    GetMenu = async (e) => {
        this.setState({ data : await plat_menu(e.[0].idMenu)}) 
       // console.log(this.state.data.entree)

   
    }  
    
   

    constructor (props)  {
            
        super(props)

        this.state={
                date : props.dateMenu  ,

                data: {}
             
        }
        this.Getid().then((e) => this.GetMenu(e))
           // console.log(this.Getid())
      //  console.log(this.state.data[0])
        
        
    }

    componentDidUpdate(prevProps){

       if (this.props !== prevProps) {
               this.setState({
                    date : this.props.dateMenu  ,
                   
            })
             
            this.Getid().then((e) => this.GetMenu(e))

       }
        
    }

    



    

    render() {
               
       
        
        return (
            <div className ='menu' >

                            <br/>
                            <Plats plat={this.state.data.entree} type = {'entrees'} />
                            <hr/>

                            
                            <Plats plat={this.state.data.principal} type = {'principals'}/>

                            <hr/>

                            <Plats plat={this.state.data.dessert} type = {'desserts'}/>


                        </div>
        );
    }
}

export default menu;
