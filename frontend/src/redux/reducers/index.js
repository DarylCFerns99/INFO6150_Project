import { combineReducers } from 'redux'

import restaurantsReducer from './restaurantsReducer'
import restaurantReducer from './restaurantReducer'
import userReducer from './userReducer'
import menuReducer from './menuReducer'
import cartReducer from './cartReducer'

const allReducers = combineReducers({
    // Add reducers in this
    restaurantsReducer,
    restaurantReducer,
    userReducer,
    menuReducer,
    cartReducer,
})

export default allReducers