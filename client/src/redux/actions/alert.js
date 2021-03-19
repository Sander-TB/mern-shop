import { SET_ALERT } from "../actions/actionTypes";

export const alertAction = (message, alertType) => (dispatch) => {
	dispatch({
		type: SET_ALERT,
		payload: { message, alertType },
	});
};
