import { ActionTypes } from "../../src/actions/ActionTypes"
import { initialState } from '../store/Store'

export const countReducer = (state = initialState, action)=>{
    switch(action.type)
    {
        case ActionTypes.increase:
            return Object.assign({}, state, {count: state.count+1})
        case ActionTypes.decrease:
            return Object.assign({}, state, {count: state.count-1})
    }
    return state
}