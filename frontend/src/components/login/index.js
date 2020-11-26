import React, { useState } from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import Button from '../button'
import {login} from '../../authService'
import Fork from '../../assets/fork.svg'
import Spoon from '../../assets/spoon.svg'
import './login.css'

function Login(props) {

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    const [redirectToReferrer, setRedirect] = useState(false)

    async function click(e) {
        e.preventDefault();

        if (await login(user, password))
        {
            setRedirect(true)
        } else {
            alert("user/pass non valide.")
        }
    }

    let { from } = { from: {pathname: "/"}};
    if (redirectToReferrer) return <Redirect to={from} />

    return (
        <div className="cont">
            <h2>Login</h2>
            <div>
                <img src={Fork} alt="fork" />
                <form>
                    <span>
                        <label>Username :</label>
                        <input type="text" value={user} onChange={e => setUser(e.target.value)} />
                    </span>
                    <span>
                        <label>Password :</label>
                        <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
                    </span>
                    <Button label="Login" onClick={click} />
                </form>
                <img src={Spoon} alt="spoon" />
            </div>
        </div>
    )
}

export default Login;