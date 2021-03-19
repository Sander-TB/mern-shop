import { SET_ALERT, REMOVE_ALERT } from "../actions/actionTypes";

const initialState = [];

export default function AlertReducer(state = initialState, { type, payload }) {
	switch (type) {
		case SET_ALERT:
			return [...state, payload];
		case REMOVE_ALERT:
			return [...state, []];
		default:
			return state;
	}
}
