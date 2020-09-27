import React from "react"
import { Redirect } from "react-router-dom"
import {AuthContext} from "./AuthContext"

export default class Login extends React.Component{

    render()
    {
        const {isAuth} = this.context
        if(isAuth === true)
        {
            return(
                <Redirect to="/cart"/>
            )
        }

        return(
            <div>
                Login Page
            </div>
        )
    }
}


Login.contextType = AuthContext