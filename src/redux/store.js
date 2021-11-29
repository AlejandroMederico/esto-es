import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

//thunk promesas


//reducer
import estadisticaReducer from './EstadisticaDuck'

const rootReducer = combineReducers ({
    EstadisticaArray:estadisticaReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore (rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store;
}