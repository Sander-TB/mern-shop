import { combineReducers } from "redux";
import register from "./auth";
import setAlert from "../reducers/alert";

export default combineReducers({ register, setAlert });
