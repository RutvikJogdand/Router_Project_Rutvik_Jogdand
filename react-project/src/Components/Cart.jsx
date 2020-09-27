import React from "react"
import { Redirect } from "react-router-dom"
import {AuthContext} from "./AuthContext"


export default class Cart extends React.Component{

    render()
    {
        const {isAuth} = this.context
        if(isAuth === false)
        {
            return(
                <Redirect to="/login" />
            )
        }
        return(
            <div>
                Cart Page
            </div>
        )
    }
}

Cart.contextType = AuthContext