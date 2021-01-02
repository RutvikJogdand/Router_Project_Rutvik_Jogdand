import React from "react"
import {connect} from "react-redux"
import {get_sports_bikes} from "./../../Redux/actions"
import styles from "./SportsBikes.module.css"
import styles2 from "./Bikes.module.css"

class SportsBikes extends React.Component{

    
    componentDidMount(){

        this.props.getSportsBikes()
        console.log(this.props)
    }

    render()
    {
        const {bikes_arr} = this.props
        return(
            <div className={styles2.bikesContainer}>
                {
                    bikes_arr && bikes_arr.map(item => {

                        return(
                            <div key={item.id}>
                                <div>
                                    <img className={styles.bikeImg} src={item.img} alt={item.bike_name} />
                                </div>

                                <div>
                                    <p> {item.bike_name} </p>
                                    <p> INR {item.price.toString().split("").join("").slice(0,1) + "," + item.price.toString().split("").join("").slice(1,3) + "," + item.price.toString().split("").join("").slice(3) } </p>
                                    <p> {item.specifications.top_speed} km/hr </p>
                                    <p> {item.specifications.Mileage} km/ltr </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

    bikes_arr: state.sportsBikesRoot.bikes_arr,
    err_message: state.sportsBikesRoot.err_message
}) 

const mapDispatchToProps = (dispatch) => ({

    getSportsBikes: () => dispatch(get_sports_bikes())
})


export default connect(mapStateToProps, mapDispatchToProps)(SportsBikes)