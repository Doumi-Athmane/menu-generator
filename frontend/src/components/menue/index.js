import React, { Component } from 'react';
import './index.css'
import Menu from '../menu'
import Valider from './valider'
import Refresh from './refresh'
import Ingrediants from './ingrediants'
import {ajouter_menu_de_jour , get_ingrediant_menu} from '../../requests/menuJour'
import ingrediant from './ingrediant';
import ingrediants from './ingrediants';




const test1 = [
    {nom :'Ingredian1' },
    {nom :'Ingrediant2'},
    {nom :'Ingrediant3' },
    {nom :'Ingrediant4' },
    {nom :'Ingrediant5' },
    {nom :'Ingrediant6' },
    {nom :'Ingrediant7' },
    {nom :'Ingrediant8'},
    {nom :'Ingredian1' },
    {nom :'Ingrediant2'},
    {nom :'Ingrediant3' },
    {nom :'Ingrediant4' },
    {nom :'Ingrediant5' },
    {nom :'Ingrediant6' },
    {nom :'Ingrediant7' },
    {nom :'Ingrediant8'},
    

    
]

class PageMenu extends Component {


    AjouterMenuJour = async (e)  => {
        this.setState({ data :  await ajouter_menu_de_jour(e)})
        
    }
    GetIngrediant = async (e) => {
        this.setState({ ingrediants : this.state.ingrediants.concat(await get_ingrediant_menu(e)) })
        console.log({ ingrediants : await get_ingrediant_menu(e)})
        console.log(this.state.ingrediants)
    }

    

    constructor(){
        super()
        
        var today = new Date()
            today = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

        this.state = {
            date : today,
            dataM :[],
            ingrediants :[]
         
        }

        this.getentree = this.getentree.bind(this);
        this.getprincipal = this.getprincipal.bind(this);
        this.getdessert = this.getdessert.bind(this);


    }

    getentree(data) {
        
        const dataI = []
        data && data.forEach(element => {
            dataI.push(element.idPlat)
            
        });
       

        this.setState({ dataM: this.state.dataM.concat(dataI)});
       
        
    }

    getprincipal(data){
        const dataI = []
        data && data.forEach(element => {
            dataI.push(element.idPlat)

           
        });

        this.setState({ dataM: this.state.dataM.concat(dataI)});

    }

    getdessert(data){
        const dataI = []
       
        data && data.forEach(element => {
            dataI.push(element.idPlat)

            
        });
       
        this.setState({ dataM: this.state.dataM.concat(dataI)}) ;
        
        this.GetIngrediant(this.state.dataM.join())
       
        


    }

    componentDidMount(prevState) {
        if (this.state !== prevState){
            this.GetIngrediant(this.state.dataM.join())
            console.log(this.GetIngrediant(this.state.dataM.join()))
        }
    }

    render() {

       
        return (
            <div className='menupage'>

                <div className ='BigTitle'>

                    <h1>Menu de jour : {this.state.date} </h1>
                    

                </div>

                <div className ='contenue'>
                    <div className = 'cotéMenu'>
                        <Menu entree={this.getentree} principal={this.getprincipal} dessert={this.getdessert} />
                        
                        <div className ='valide'>
                           <Valider onClick = {() => {this.AjouterMenuJour(this.state.dataM)
                                                        alert('Menu ajouté')}}/>
                           <Refresh/>
                           
                        </div>

                    </div>

                    <div className ='ingrediantss'>
                        <Ingrediants ingrediants ={this.state.ingrediants}/>
                    </div>
                    
                </div>

                

                
            </div>
        );
    }
}

export default PageMenu;
