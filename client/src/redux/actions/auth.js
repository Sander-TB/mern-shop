import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "./actionTypes";

export const registerUser = ({ firstName, email, password }) => async (
	dispatch
) => {
	const userData = JSON.stringify({
		firstName,
		email,
		password,
	});
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	try {
		const res = await axios.post("/api/auth", userData, config);
		dispatch({
			type: REGISTER_SUCCESS,
			payload: {
				jwtToken: res.data.token,
			},
		});
		localStorage.setItem("token", res.data.token);
		console.log(res);
	} catch (error) {
		dispatch({
			type: REGISTER_FAIL,
		});
		localStorage.removeItem("token");
		console.log(error);
	}

	// if success
	// dispatch the action
};
