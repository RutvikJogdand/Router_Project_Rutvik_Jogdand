import React from "react"
import {Route, Switch} from "react-router-dom"
import AboutUs from "../Components/AboutUs"
import Accessories from "../Components/Accessories"
import Bikes from "../Components/Bikes"
import Cart from "../Components/Cart"
import Login from "../Components/Login"
import Home from "./../Components/Home"



export default class Routes extends React.Component{

    render()
    {
        
        return(
            <>
                <Switch>
                    <Route path="/" exact render={()=><Home/> } />
                    <Route path="/bikes" render={()=><Bikes/> }/>   
                    <Route path="/accessories" render={()=><Accessories/> } />
                    <Route path="/about-us" render={()=><AboutUs/> } />
                    <Route path="/login" render={()=><Login/> } />
                    <Route path="/cart" render={()=><Cart/> }/>
                </Switch>
            </>
        )
       
    }
}

