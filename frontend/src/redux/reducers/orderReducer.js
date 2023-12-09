import * as actions from "../actions/actionTypes"

const initialState = {
    data: [],
}

const orderReducer = (state = initialState, action) =>{
    switch(action.type){
        case actions.GET_ORDER_DETAILS:{
            return ({
                data: action.payload ?? {}
            })
        }
        default: 
            return state
    }
}

export default orderReducer;