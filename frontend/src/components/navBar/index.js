import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import User from './user'
import PageBtn from './mainBtn'
import SettingsBtn from './secondBtn'
import Generer from '../../assets/generate.svg'
import Menu from '../../assets/menu.svg'
import Plat from '../../assets/dish.svg'
import Ingrediant from '../../assets/vegetable.svg'
import Parametres from '../../assets/preference.svg'
import Logout from '../../assets/logout.svg'
import './index.css'
import {logout} from '../../authService'

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            redirect: false
        }

        this.performLogout = this.performLogout.bind(this)
    }

    performLogout() {
        logout();
        this.setState({redirect: true})
    }

    render() {
        if (this.state.redirect) return <Redirect to="/" />
        return (
            <div className="NavBar">
                <div className="UserColumn">
                    <User name="admin"></User>
                </div>
                <div className="MenuColumn">
                    <Link to="/"><PageBtn icon={Generer} text="Generer" /></Link>
                    <Link to="/menu"><PageBtn icon={Menu} text="Menu" /></Link>
                    <Link to="/plats"><PageBtn icon={Plat} text="Plat" /></Link>
                    <Link to="/ingrediant"><PageBtn icon={Ingrediant} text="Ingrediant" /></Link>
                </div>
                <div className="LogoutColumn">
                    {/* <SettingsBtn icon={Parametres} text="Parametres" /> */}
                    <SettingsBtn icon={Logout} text="deconnexion" onClick={this.performLogout} />
                </div>
            </div>
        )
    }
}