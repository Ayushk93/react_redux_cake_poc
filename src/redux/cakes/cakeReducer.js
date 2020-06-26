import { BUY_CAKE } from './cakeTypes'

const initislState = {
    numOfCakes: 10
}

const cakeReduer = (state = initislState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - action.payload
        }
        default: return state
    }
}

export default cakeReduer