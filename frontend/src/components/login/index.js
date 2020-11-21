import React from 'react'
import Button from '../button'
import Fork from '../../assets/fork.svg'
import Spoon from '../../assets/spoon.svg'
import './login.css'

function Login() {

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
                    <Button label="Login" />
                </form>
                <img src={Spoon} alt="spoon" />
            </div>
        </div>
    )
}

export default Login;