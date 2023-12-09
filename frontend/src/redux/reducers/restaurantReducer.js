import * as actions from "../actions/actionTypes"

const restaurantReducer = (state = {}, action) => {
    switch(action.type) {
        case actions.SELECT_RESTAUARANT: {
            return ({
                ...(action?.payload ?? {})
            })
        }
        default:
            return state
    }
}

export default restaurantReducer