import React from "react"
import styles from "./BikesPageComponents/Bikes.module.css"
import SportsBikes from "./BikesPageComponents/SportsBikes"
import Cruisers from "./BikesPageComponents/Cruisers"
import ElectricBikes from "./BikesPageComponents/ElectricBikes"

export default class Bikes extends React.Component{

    render()
    {
        return(
            <>
                <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Sports Bikes</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Cruisers</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Electric Bikes</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active p-3" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <SportsBikes/>
                </div>
                <div className="tab-pane fade p-3" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <Cruisers/>
                </div>
                <div className="tab-pane fade p-3" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <ElectricBikes/>
                </div>
            </div>
            </>
        )
    }
}