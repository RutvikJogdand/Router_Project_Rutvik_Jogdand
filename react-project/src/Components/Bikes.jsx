import React from "react"
import { Link } from "react-router-dom"
import styles from "./BikesPageComponents/Bikes.module.css"

export default class Bikes extends React.Component{

    render()
    {
        return(
            <div className={styles.BikesMain}>
               <div>
                    <Link to="/bikes/all-bikes/sports-bikes">Sports Bikes</Link>
               </div>

               <div>
                    {/* <Link to="/bikes/all-bikes/cruisers">Cruisers</Link> */}
               </div>

               <div>
                    {/* <Link to="/bikes/all-bikes/electric">Electric Bikes</Link> */}
               </div>
            </div>
        )
    }
}