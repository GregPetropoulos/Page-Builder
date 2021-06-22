import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import accountService from '../services/account';

export const Login = () => {
	const { auth } = useContext(AuthContext);
	const [error, setError] = useState('');
	const handleSubmit = async ev => {
		ev.preventDefault();
		const [emailInput, passwordInput] = ev.target.elements;
		const email = emailInput.value;
		const password = passwordInput.value;
		if (email.length > 0 && password.length > 0) {
			const userInfo = await accountService.ApiLogin({ email, password });
			if (userInfo.error) {
				setError(userInfo.error);
			} else {
				auth(userInfo);
			}
		} else {
			setError('Email or password too short');
		}
	};
	return (
		<form className="p-5 container" onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="loginEmail">Email address</label>
				<input
					type="email"
					className="form-control"
					id="loginEmail"
					aria-describedby="emailHelp"
					placeholder="Enter email"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="loginPassword">Password</label>
				<input
					type="password"
					className="form-control"
					id="loginPassword"
					placeholder="Password"
				/>
			</div>
			<p className="text-danger text-center">{error}</p>
			<div className="d-flex justify-content-center">
				<button type="submit" className="btn btn-primary">
					Login
				</button>
			</div>
		</form>
	);
};
