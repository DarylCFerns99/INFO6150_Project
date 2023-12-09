import * as actions from "../actions/actionTypes"

const initialState = {
    data: {},
    cartData: {},
    total : {},
}

const handleIncAndDec = (key,{cartData,total}, inc=true) => {
    let strKey = JSON.stringify(key.props)
    if(inc){
        if(total[key.resto_id]){
            total[key.resto_id] += Number(key.props.price)
        } else total[key.resto_id] = Number(key.props.price)
        if(cartData[key.resto_id]?.[strKey]) { cartData[key.resto_id][strKey] += 1} 
            else cartData[key.resto_id] = {
                ...cartData[key.resto_id],
                [strKey] : 1
            };
    } else {
        if(total[key.resto_id]){
            total[key.resto_id] -= Number(key.props.price)
        }
        if(cartData[key.resto_id]?.[strKey] && cartData[key.resto_id][strKey] != 1) { cartData[key.resto_id][strKey] -= 1} 
            else delete cartData[key.resto_id]?.[strKey];
    }
    return {cartData, total};
}


const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.ADD_ITEM_CART: {
            return ({
                ...state,                 
                ...handleIncAndDec(action.payload, state)
            })
        }

        case actions.DEl_ITEM_CART: {
            return ({
                ...state,                 
                ...handleIncAndDec(action.payload, state, false)
            })   
        }

        case actions.DEL_RESTO_CART: {
            let {cartData, total} = {...state}
            delete cartData[action.payload]
            delete total[action.payload]
            return ({
                ...state,
                cartData,
                total
            })
        }

        case actions.REMOVE_ITEM_CART:{
            console.log(action.payload)
            let tempData = {...state.cartData} 
            let {props, resto_id} = action.payload
            let total = {...state.total}
            let value = tempData[resto_id][JSON.stringify(props)]
            total[resto_id] = total[resto_id] - props.price * value
            delete tempData[resto_id][JSON.stringify(props)]
            return ({
                ...state, 
                cartData: tempData,
                total
            })
        }
        default:
            return state
    }
}
export default cartReducer;