import React from "react"
import { Link } from "react-router-dom"
import styles from "./Styles/Home.module.css"

export default class Home extends React.Component{

    render()
    {
        return(
            <div className={styles.HomeMain}>
                <div>
                    <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="HomeImgCarousel1.jpg" class="d-block img-fluid img-responsive w-100" alt="Bike"/>
                            <div class="carousel-caption  d-md-block">
                                <h3>Cruisers, Sports Bikes and more..</h3>
                                <p>Select from a huge range of motorcycles based on your style and choice.</p>
                               <Link to="/bikes/all-bikes"> <button className="btn btn-danger">Shop now</button> </Link>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <img src="HomeImgCarousel2.jpg" class="d-block img-fluid img-responsive w-100" alt="Helmet"/>
                            <div class="carousel-caption  d-md-block">
                                <h3>Helmets, Jackets and all related accessories..</h3>
                                <p>Branded and class apart accessories for your ride, available now.</p>
                                <Link to="/accessories/all-accessories"> <button className="btn btn-danger">Shop now</button> </Link>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <img src="HomeImgCarousel3.png" class="d-block img-fluid img-responsive w-100" alt="Quote"/>
                            <div class="carousel-caption  d-md-block">
                                <h5>Get ready for a memorable ride.</h5>
                                <p>We are here to help you customize your ride and have a rich experience everytime you hit the road.</p>
                            </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}