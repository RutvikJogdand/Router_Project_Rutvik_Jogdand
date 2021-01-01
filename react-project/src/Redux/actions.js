import {SPORTS_REQUEST, SPORTS_SUCCESS, SPORTS_FAILURE} from "./actionTypes"
import axios from "axios"

export const sports_request = () => ({
    type: SPORTS_REQUEST
})

export const sports_success = (payload) => ({
    type: SPORTS_SUCCESS,
    payload
})

export const sports_failure = (payload) => ({
    type: SPORTS_FAILURE,
    payload
})

export const get_sports_bikes = () => (dispatch) => {

    dispatch(sports_request())
    axios
    .get("http://localhost:3000/sports_bikes")
    .then((res) => {

        // console.log(res)
        dispatch(sports_success(res.data))
    })
    .catch((err) => {

        console.log(err)
        dispatch(sports_failure(err))
    })
}