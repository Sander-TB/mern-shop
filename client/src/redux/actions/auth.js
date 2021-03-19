import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "./actionTypes";
import { alertAction } from "./alert";

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
		const res = await axios.post(
			"http://localhost:5000/api/auth", //package.json proxy not working? Hard coded for now
			userData,
			config
		);
		dispatch({
			type: REGISTER_SUCCESS,
			payload: {
				jwtToken: res.data.token,
			},
		});
		localStorage.setItem("token", res.data.token);
		dispatch(alertAction("Success", "success"));
		console.log(res);
	} catch (error) {
		console.log(error);
		if (error.response && error.response.data) {
			dispatch(alertAction(error.response.data, "fail"));
		}
		dispatch({
			type: REGISTER_FAIL,
		});
		localStorage.removeItem("token");
		console.log(error);
	}
};
