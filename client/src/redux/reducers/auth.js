import { REGISTER_FAIL, REGISTER_SUCCESS } from "../actions/actionTypes";

const initialState = {
	jwtToken: null,
};

export default function register(state = initialState, action) {
	switch (action.type) {
		case REGISTER_SUCCESS:
		//return state
		case REGISTER_FAIL:
		// return old state, do nothing
		default:
			return state;
	}
	// get back jwt token
	// store the token in localstorage
	// user is registered
}
