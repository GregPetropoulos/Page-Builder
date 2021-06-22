import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import accountService from '../services/account';

export const Register = () => {
	const [error, setError] = useState(null);

	const { auth } = useContext(AuthContext);
	const handleSubmit = async ev => {
		ev.preventDefault();
		const [emailInput, passwordInput, confirmPasswordInput] =
			ev.target.elements;
		const email = emailInput.value;
		const password = passwordInput.value;
		const confirmedPassword = confirmPasswordInput.value;
		if (
			email.length > 0 &&
			password.length > 0 &&
			confirmedPassword.length > 0
		) {
			if (password === confirmedPassword) {
				const userInfo = await accountService.ApiRegister(
					email,
					password
				);
				if (userInfo.error) {
					setError(userInfo.error);
				} else {
					auth(userInfo);
				}
			} else {
				setError('Passwords do not match');
			}
		} else {
			setError('Email or password too short');
		}
	};

	return (
		<form className="p-5 container" onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="registerEmail">Email address</label>
				<input
					type="email"
					className="form-control"
					id="registerEmail"
					aria-describedby="emailHelpRegister"
					placeholder="Enter email"
				/>
				<small id="emailHelpRegister" className="form-text text-muted">
					We'll never share your email with anyone else.
				</small>
			</div>
			<div className="form-group">
				<label htmlFor="registerPassword">Password</label>
				<input
					type="password"
					className="form-control"
					id="registerPassword"
					placeholder="Password"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="registerConfirmPassword">
					Confirm Password
				</label>
				<input
					type="password"
					className="form-control"
					id="registerConfirmPassword"
					placeholder="Password"
				/>
			</div>
			<p className="text-danger text-center">{error}</p>
			<div className="d-flex justify-content-center">
				<button type="submit" className="btn btn-primary">
					Register
				</button>
			</div>
		</form>
	);
};
