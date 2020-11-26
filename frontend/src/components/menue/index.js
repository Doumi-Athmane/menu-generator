import React, { Component } from 'react';
import './index.css'
import Menu from '../menu'
import Valider from './valider'
import Refresh from './refresh'
import Button from '../button'
import Ingrediants from './ingrediants'
import {ajouter_menu_de_jour , get_ingrediant_menu, afficher_menu_de_jour} from '../../requests/menuJour'
import {list_menu} from '../../requests/menu'

class PageMenu extends Component {
    constructor(){
        super()
        
        function getNextDate (){
        
            const currentDayInMilli = new Date()
            const oneDay = 1000 * 60 *60 *24
            const nextDayInMilli = currentDayInMilli.getTime() + oneDay
            const nextDate = new Date(nextDayInMilli)
        
            return (nextDate.getFullYear() + "-"+ parseInt(nextDate.getMonth()+1) +"-"+nextDate.getDate())
        
        }

        this.state = {
            date : getNextDate(),
            ingrediants :[],
            loading: true
        }

        var location = window.location.href
        
        
        var url = new URL(location)

        var idplats = url.searchParams.get("plats") 

        this.AfficherMenuJour(idplats).then(() => {
            this.GetIngrediant().then(() => this.setState({loading: false}))  
        })

        this.copier = this.copier.bind(this)
    }
    
    AjouterMenuJour = async ()  => {
        const menus = await list_menu(this.state.date)
        if(menus.length > 0){
            const t = window.confirm("Un menu existe deja pour cette date.\n voulez-vous l'ecraser ?");
            if (!t)
                return;
        }
        const { entree, principal, dessert } = this.state.plats;
        const ids = [...entree, ...principal, ...dessert].map(e => e.idPlat)
        try {

            await ajouter_menu_de_jour(ids)
            alert("Menu ajouté.")
        } catch(e) {
            alert("error")
        }

        
    }

    GetIngrediant = async () => {
        if (!this.state.plats)
            return;
        const { entree, principal, dessert } = this.state.plats;
        let ings = entree.map(e => e.idPlat)
        ings = ings.concat(principal.map(e => e.idPlat))
        ings = ings.concat(dessert.map(e => e.idPlat))
        this.setState({ ingrediants : await get_ingrediant_menu(ings.join()) })
    }

    AfficherMenuJour = async (e)  => {
        this.setState({ plats :  await afficher_menu_de_jour(e)})
    }


    copier() {
        const {entree, principal, dessert} = this.state.plats;
        const data = [...entree, ...principal, ...dessert]
        const maxChars = data.reduce((prev, curr) => prev < curr.nom.length?curr.nom.length:prev, 0)

        const text = data.reduce((prev, curr) => {
            let pts = Array(maxChars - curr.nom.length).fill('.').join('');
            return `${prev}${curr.nom} ${pts}.. ${curr.prix}DA \n`
        }, "")
        
        navigator.clipboard.writeText(text)
            .then(() => alert("copied to clipboard!"));
    }

    render() {
        const { loading } = this.state;
        if (loading)
            return (<div>Loading...</div>)

        const { entree, principal, dessert } = this.state.plats
        return (
            <div className='menupage'>
                <div className ='BigTitle'>
                    <h2>Menu de jour : {this.state.date} </h2>
                </div>

                <div className ='contenue'>
                    <div className = 'cotéMenu'>
                        <Menu entree={entree} principal={principal} dessert={dessert} />
                        
                        <div className ='valide'>
                            <Valider onClick = {this.AjouterMenuJour}/>
                            <Refresh/>
                            <div className="valider">
                                <Button label="Copier" onClick={this.copier} />
                            </div>
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
