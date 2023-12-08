import { combineReducers } from 'redux'
// Import reducers here
import menuReducer from './menuReducer'
import cartReducer from './cartReducer'

const allReducers = combineReducers({
    // Add reducers in this
    menuReducer,
    cartReducer,
})

export default allReducers