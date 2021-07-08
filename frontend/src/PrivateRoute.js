import { Redirect, Route } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

export const PrivateRoute = ({ children, ...props }) => {
	const { currentUser } = useContext(AuthContext);
	console.log(currentUser);
	return currentUser ? (
		<Route {...props}>{children}</Route>
	) : (
		<Redirect path="/" />
	);
};
