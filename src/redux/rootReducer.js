import { combineReducers } from 'redux'
import cakeReduer from './cakes/cakeReducer'

const rootReducer = combineReducers({
    cake: cakeReduer
})

export default rootReducer