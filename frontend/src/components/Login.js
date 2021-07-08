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
		<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-full" onSubmit={handleSubmit}>
			<h1 className="text-center font-black pb-2">LOGIN</h1>
			<div className="mb-4">
				<label htmlFor="loginEmail" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
				<input
					type="email"
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="loginEmail"
					placeholder="Enter email"
				/>
			</div>
			<div className="mb-6">
				<label htmlFor="loginPassword" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
				<input
					type="password"
					className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
					id="loginPassword"
					placeholder="Password"
				/>
			</div>
			<p className="text-danger text-center">{error}</p>
			<div className="flex items-center justify-between">
				<button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
					Login
				</button>
			</div>
		</form>
	);
};
