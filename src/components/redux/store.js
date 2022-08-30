import { createStore ,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {PostReducer,EditeReducer,LoginReducer} from './reducer'
const middeleware=[thunk]

const login=localStorage.getItem("login") ? JSON.parse(localStorage.getItem('login')) : {}
const initialState={
    getLogin:login

}

const reducer=combineReducers({
    getPosts:PostReducer,
    getEdite:EditeReducer,
    getLogin:LoginReducer,
})


const store = createStore(reducer,initialState,applyMiddleware(...middeleware))

export default store