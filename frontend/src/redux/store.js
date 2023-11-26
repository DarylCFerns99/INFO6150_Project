import window from "global/window"
import {createStore, applyMiddleware, compose} from "redux"
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

import allReducers from "./reducers"

let enhancers = [applyMiddleware(thunkMiddleware)]
if (process.env.NODE_ENV === 'development') {
    enhancers = [applyMiddleware(thunkMiddleware), applyMiddleware(logger)]
}

// This adds redux devtools to help in debugging
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(allReducers, {}, composeEnhancers(...enhancers))

export default store