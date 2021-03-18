import { REGISTER_FAIL, REGISTER_SUCCESS } from "../actions/actionTypes";

const initialState = {
	jwtToken: null,
};

export default function register(state = initialState, { type, payload }) {
	switch (type) {
		case REGISTER_SUCCESS:
			return {
				...state,
				jwtToken: payload.jwtToken,
			};
		//return state
		case REGISTER_FAIL:
			return {
				...state,
				jwtToken: null,
			};
		// return old state, do nothing
		default:
			return state;
	}

	// store the token in localstorage
	// user is registered
}
