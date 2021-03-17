import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"; // allows us to make async requests in actions
import rootReducer from "./reducers/index";

const initialState = {};
const middleWare = [thunk]; // array
const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
