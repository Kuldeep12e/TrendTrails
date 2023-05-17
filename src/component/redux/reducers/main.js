import { getProductsreducer } from "./Producstreducer";
import {combineReducers} from "redux"

const rootreducers = combineReducers({
	getproductsdata :getProductsreducer
});

export default rootreducers;