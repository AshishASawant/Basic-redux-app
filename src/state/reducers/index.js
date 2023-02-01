import { combineReducers } from "redux";
import setAmount from './amountReducer'

const reducers=combineReducers({
    amount:setAmount
})

export default reducers
