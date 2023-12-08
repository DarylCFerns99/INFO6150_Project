import { combineReducers } from 'redux'
// Import reducers here
import restaurantsReducer from './restaurantsReducer'
import restaurantReducer from './restaurantReducer'
import userReducer from './userReducer'

const allReducers = combineReducers({
    // Add reducers in this
    restaurantsReducer,
    restaurantReducer,
    userReducer
})

export default allReducers