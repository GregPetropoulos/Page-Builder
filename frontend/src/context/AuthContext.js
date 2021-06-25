import React, { useEffect, useState } from 'react';

export const AuthContext = React.createContext();

const localUser = JSON.parse(localStorage.getItem('user'));

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(localUser || null);

	const auth = userData => {
		localStorage.setItem('user', JSON.stringify(userData));
		setCurrentUser(userData);
	};

	const signOut = () => {
		localStorage.removeItem('user');
		setCurrentUser(null);
	};
	// may need to add  a delete variable

	useEffect(() => {
		if (currentUser) {
			localStorage.setItem('user', JSON.stringify(currentUser));
		} else {
			localStorage.removeItem('user');
		}
	}, [currentUser]);

	return (
		<AuthContext.Provider value={{ currentUser, auth, signOut }}>
			{children}
		</AuthContext.Provider>
	);
};
