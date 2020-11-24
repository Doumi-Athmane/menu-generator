import React, { Component } from 'react';
import Plats from './menue/ListeType'
import './menue/index.css'
import {list_menu , plat_menu} from '../requests/menu'
import { afficher_menu_de_jour} from '../requests/menuJour'
 
  


class menu extends Component {


    

     
    Getid = async () => {
       let t = await list_menu(this.props.dateMenu)
     
        return t
    }  

    GetMenu = async (e) => {
        this.setState({ data : await plat_menu(e.[0].idMenu)}) 
       
    } 
    AfficherMenuJour = async (e)  => {
        this.setState({ data :  await afficher_menu_de_jour(e)})
        
    }
    
    


    constructor (props)  {

        
            
        super(props)

        

        this.state={
                date : props.dateMenu  ,

                data: {}
             
        }

        var location = window.location.href
        
        
        var url = new URL(location)

        var idplats = url.searchParams.get("plats") ? url.searchParams.get("plats") : ''
        

        this.Getid().then((e) => this.GetMenu(e))

        this.AfficherMenuJour(idplats).then(()=> {props.entree(this.state.data.entree)
                                                  props.principal(this.state.data.principal)
                                                  props.dessert(this.state.data.dessert)   
                                                                       })
                                                .catch(e => console.log(e))
        
       
           
        
        
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
