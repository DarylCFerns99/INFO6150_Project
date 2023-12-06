import { combineReducers } from 'redux'
// Import reducers here
import sampleReducer from './sampleReducer'
import restaurantReducer from './restaurantReducer'

const allReducers = combineReducers({
    // Add reducers in this
    sampleReducer, restaurantReducer
})

export default allReducers