import React from "react"
import {Link} from "react-router-dom"
import styles from "./Footer.module.css"

const ProductArr=["Business", "Features", "Mobile"]

const Company=["About Us", "Blog", "News", "Press Releases", "Jobs", "Contact Us"]

const LearnMore=["Support", "Developers", "FAQs", "Customer Care"]

const ConnectWithUs= ["Facebook", "Twitter", "LinkedIn", "Youtube"]


export default class Footer extends React.Component{

    render()
    {
        return(
            <>
            <div className={styles.FooterMain}>
                {/* First */}
                <div>
                    <div className={styles.FooterSectionTitles}>Product</div>
                    <ul className={styles.FooterList}>
                        {ProductArr.map((item, index)=>{

                            return(
                                
                                <li key={index}>{item}</li>
                            )
                        })}
                    </ul>
                </div>

                {/* Second */}
                <div>
                    <div className={styles.FooterSectionTitles}>Company</div>
                    
                    <ul className={styles.FooterList}>
                        {Company.map((item, index)=>{

                            return(
                                
                                <li key={index}>{item}</li>
                            )
                        })}
                    </ul>
                </div>

                {/* Third */}
                <div>
                    <div className={styles.FooterSectionTitles}>Learn More</div>
                    
                    <ul className={styles.FooterList}>
                        {LearnMore.map((item, index)=>{

                            return(
                                
                                <li key={index}>{item}</li>
                            )
                        })}
                    </ul>
                </div>

                {/* Fourth */}
                <div>
                    <div className={styles.FooterSectionTitles}>Connect With Us</div>
                    
                    <ul className={styles.FooterList}>
                       <li><i className="fa fa-facebook-official text-primary"></i> {ConnectWithUs[0]} </li>
                       <li><i className="fa fa-twitter text-primary"></i> {ConnectWithUs[1]} </li>
                       <li><i className="fa fa-linkedin text-primary"></i> {ConnectWithUs[2]} </li>
                       <li><i className="fa fa-youtube text-danger"></i> {ConnectWithUs[3]} </li>
                    </ul>
                </div>
            </div>
            </>
            
        )
    }
}