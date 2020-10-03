import React from "react"
import { Link, Route, Switch } from "react-router-dom"
import styles from "./BikesPageComponents/Bikes.module.css"
import SportsBikes from "./BikesPageComponents/SportsBikes"
import Cruisers from "./BikesPageComponents/Cruisers"

export default class Bikes extends React.Component{

    render()
    {
        return(
            <>
            <div className={styles.BikesMain}>
               <div className={styles.BikesMainDiv ,styles.MainDiv1}>
                    <Link to="/bikes/sports-bikes">Sports Bikes</Link>
               </div>

               <div className={styles.MainDiv2}>
                    <Link to="/bikes/cruisers">Cruisers</Link>
               </div>

               <div className={styles.MainDiv3}>
                    <Link to="/bikes/electric">Electric Bikes</Link>
               </div>
               
               
            </div>
            {/* <Switch>
                    <Route path="/bikes/all-bikes/sports-bikes" exact  render={()=><SportsBikes/>} />
                    <Route path="/bikes/all-bikes/cruisers"  render={()=><Cruisers/> } />
            </Switch> */}
            </>
        )
    }
}