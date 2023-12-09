import * as actions from "../actions/actionTypes"

const initialState = {}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.ADD_USER_DATA: {
            return ({
                ...(action?.payload ?? {})
            })
        }
        case actions.LOGOUT:
            return initialState
        default:
            return state
    }
}

export default userReducer