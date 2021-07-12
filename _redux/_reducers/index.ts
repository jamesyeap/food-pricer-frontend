import { combineReducers } from "redux";
import PriceReducer from "./price.reducer";

export default combineReducers({
	prices: PriceReducer
})