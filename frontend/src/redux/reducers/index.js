import { combineReducers } from 'redux'
// Import reducers here
import sampleReducer from './sampleReducer'
import restaurantsReducer from './restaurantsReducer'
import restaurantReducer from './restaurantReducer'

const allReducers = combineReducers({
    // Add reducers in this
    sampleReducer, 
    restaurantsReducer,
    restaurantReducer
})

export default allReducers