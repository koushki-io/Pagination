import { createStore ,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {PostReducer,EditeReducer} from './reducer'
const middeleware=[thunk]


const initialState={

}

const reducer=combineReducers({
    getPosts:PostReducer,
    getEdite:EditeReducer,
})


const store = createStore(reducer,initialState,applyMiddleware(...middeleware))

export default store