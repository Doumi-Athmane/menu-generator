import React, { useEffect, useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import {isAuthenticated} from '../authService'


const ProtectedRoute = ({ component: Component, ...rest }) => {

    const [loading, setLoading] = useState(true)
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        async function fetchData() {
            setIsAuth(await isAuthenticated())
        }
        fetchData().then(e => setLoading(false));
    })

    if (!loading)
        
        return (
            <Route
                {...rest}
                render={props => 
                    isAuth === true ? (
                        <Component {...props} />
                    ):(
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }} />
                    )
                }
            />
        )

    return <div>Loading ....</div>
}

export default ProtectedRoute;