import {SPORTS_REQUEST, SPORTS_SUCCESS, SPORTS_FAILURE} from "./actionTypes"

export const INIT_STATE = {

    bikes_arr: [],
    err_message: ""
}

const bikesReducer = (state = INIT_STATE, action) => {

    switch(action.type)
    {
        case SPORTS_REQUEST:
            return{
                ...state,
                bikes_arr: [],
                err_message: ""
            }

        case SPORTS_SUCCESS:
            return{
                ...state,
                bikes_arr: action.payload
            }

        case SPORTS_FAILURE:
            return{
                ...state,
                err_message: "Error fetching sports bikes data"
            }    

        default:
            return state    
    }
}

export default bikesReducer