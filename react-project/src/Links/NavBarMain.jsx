import React from "react"
import {Link} from "react-router-dom"
import styles from "./NavBarMain.module.css"
import {AuthContext} from "./../Components/AuthContext"


export default class NavBarMain extends React.Component{

    render()
    {
      const {isAuth} = this.context
        return(
          <>
            <div className={styles.NavBarMain}>
                <div>
                   <Link to="/"><img src="https://i.pinimg.com/600x315/fa/31/b3/fa31b37cd6126b2f6f05b75344bffb38.jpg" alt="Logo"/> </Link>     
                </div>  

                <div className={styles.MainLinks}>
                    <Link to="/">Home</Link>
                    <Link to="/bikes">Bikes</Link>
                    <Link to="/accessories">Accessories</Link>
                    <Link to="/about-us">About Us</Link>
                    {isAuth? "": <Link to="/login">Login</Link>}
                    <Link to="/cart"><i className="fa fa-cart-plus"></i></Link>
                </div>
            </div>     
          </>  
        )
    }
}

NavBarMain.contextType = AuthContext