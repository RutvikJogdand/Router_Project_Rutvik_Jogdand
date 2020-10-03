import React from "react"
import { Link } from "react-router-dom"
import styles from "./Styles/Home.module.css"

export default class Home extends React.Component{

    render()
    {
        return(
            <div className={styles.HomeMain}>
                <div>
                    <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src="HomeImgCarousel1.jpg" className="d-block img-fluid img-responsive w-100" alt="Bike"/>
                            <div className="carousel-caption  d-md-block">
                                <h3>Cruisers, Sports Bikes and more..</h3>
                                <p>Select from a huge range of motorcycles based on your style and choice.</p>
                               <Link to="/bikes"> <button className="btn btn-danger">Shop now</button> </Link>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src="HomeImgCarousel2.jpg" className="d-block img-fluid img-responsive w-100" alt="Helmet"/>
                            <div className="carousel-caption  d-md-block">
                                <h3>Helmets, Jackets and all related accessories..</h3>
                                <p>Branded and className apart accessories for your ride, available now.</p>
                                <Link to="/accessories"> <button className="btn btn-danger">Shop now</button> </Link>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img src="HomeImgCarousel3.png" className="d-block img-fluid img-responsive w-100" alt="Quote"/>
                            <div className="carousel-caption  d-md-block">
                                <h5>Get ready for a memorable ride.</h5>
                                <p>We are here to help you customize your ride and have a rich experience everytime you hit the road.</p>
                            </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}