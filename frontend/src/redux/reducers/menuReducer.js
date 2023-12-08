import * as actions from "../actions/actionTypes"

const initialState = {
    data: {},
    tempData: {},
}

const menuReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.ADD_MENU_DATA: {
            return ({
                ...state,
                data: action?.payload ?? {},
                tempData : {
                    ...state.tempData, 
                    ...action?.payload ?? {}
                },
            })
        }
        default:
            return state
    }
}
export default menuReducer;