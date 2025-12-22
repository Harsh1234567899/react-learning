import {applyMiddleware, combineReducers, createStore } from 'redux'
import {reducers} from './amountReducer.js'
import {thunk} from 'redux-thunk'

const reducer =combineReducers({
    amount : reducers
})

export const store = createStore(
    reducer,
    {},
    applyMiddleware(thunk)
)