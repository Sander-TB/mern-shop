import { useState } from "react";
import { useDispatch, connect } from "react-redux";
import { registerUser } from "../redux/actions/auth";
import Alert from "../components/Alert";

const Register = ({ alertActionData }) => {
	const [formData, setFormData] = useState({});
	const errors = alertActionData[0];
	const dispatch = useDispatch();

	const updateFields = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value }); // {fieldName: "value"}
	};

	const submitForm = (e) => {
		e.preventDefault();
		dispatch(registerUser(formData));
	};

	return (
		<>
			{!errors ? (
				""
			) : (
				<Alert messages={errors.message} alertType={errors.alertType} />
			)}
			<form
				onSubmit={(e) => {
					submitForm(e);
				}}>
				Name: <br />
				<input
					type='text'
					name='firstName'
					onChange={(e) => {
						updateFields(e);
					}}
				/>
				<br />
				Email: <br />
				<input
					type='text'
					name='email'
					onChange={(e) => {
						updateFields(e);
					}}
				/>
				<br />
				Password: <br />
				<input
					type='password'
					name='password'
					onChange={(e) => {
						updateFields(e);
					}}
				/>
				<br />
				<br />
				<input type='submit' name='submit' />
			</form>
		</>
	);
};

const mapStateToProps = (state) => ({
	alertActionData: state.setAlert,
});

export default connect(mapStateToProps, {})(Register);
