import { combineReducers } from 'redux'
// Import reducers here
import sampleReducer from './sampleReducer'

const allReducers = combineReducers({
    // Add reducers in this
    sampleReducer
})

export default allReducers