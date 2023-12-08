import { combineReducers } from 'redux'
// Import reducers here
import userReducer from './userReducer'

const allReducers = combineReducers({
    // Add reducers in this
    userReducer
})

export default allReducers