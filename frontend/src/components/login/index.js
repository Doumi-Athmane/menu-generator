import React from 'react'
import Button from '../button'
import Fork from '../../assets/fork.svg'
import Spoon from '../../assets/spoon.svg'
import './login.css'

import { signIn } from '../../requests/auth'

function Login() {

    async function click(e) {
        e.preventDefault();
        console.log(await signIn("Boss", "atlas@2020"))
    }

    return (
        <div className="cont">
            <h3>Login</h3>
            <div>
                <img src={Fork} alt="fork" />
                <form>
                    <span>
                        <label>Username :</label>
                        <input type="text" />
                    </span>
                    <span>
                        <label>Password :</label>
                        <input type="text" />
                    </span>
                    <Button label="Login" onClick={click} />
                </form>
                <img src={Spoon} alt="spoon" />
            </div>
        </div>
    )
}

export default Login;