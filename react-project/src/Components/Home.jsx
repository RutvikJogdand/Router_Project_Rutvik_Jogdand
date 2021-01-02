import React from "react"
import { Link } from "react-router-dom"
import styles from "./Styles/Home.module.css"

export default class Home extends React.Component{

    render()
    {
        return(
            <div>
                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                    <img src="HomeImgCarousel1.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                            <h3>Cruisers, Sports Bikes and more..</h3>
                            <p>Select from a huge range of motorcycles based on your style and choice.</p>
                            <Link to="/bikes"> <button className="btn btn-danger">Shop now</button> </Link>
                    </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                    <img src="HomeImgCarousel2.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h3>Helmets, Jackets and all related accessories..</h3>
                        <p>Branded and class apart accessories for your ride, available now.</p>
                        <Link to="/accessories"> <button className="btn btn-danger">Shop now</button> </Link>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="HomeImgCarousel3.png" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Get ready for a memorable ride.</h5>
                        <p>We are here to help you customize your ride and have a rich experience everytime you hit the road.</p>
                    </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleDark" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleDark" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
                </div>
            </div>
        )
    }
}