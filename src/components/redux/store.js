import { createStore ,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
const middeleware=[thunk]


const initialState={

}

const reducer=combineReducers({

})


const store = createStore(reducer,initialState,applyMiddleware(...middeleware))

export default store