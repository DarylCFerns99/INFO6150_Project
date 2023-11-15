import logger from 'redux-logger'
import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers'
 
// Logger with default options
const store = createStore(
    reducer,
    applyMiddleware(logger)
)

export default store;