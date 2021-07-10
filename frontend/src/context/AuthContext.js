import React, { useEffect, useState } from 'react';
import accountService from '../services/account';

export const AuthContext = React.createContext();

const localUser = JSON.parse(localStorage.getItem('user'))

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(localUser || null);

  //   useEffect(() => {
  //     (async () => {
  //       const localUser = JSON.parse(localStorage.getItem('user'));
  // 	 console.log('local user', localUser)
  //       if (localUser && localUser.id) {
  //         const user = await accountService.ApiGetUser(localUser.id);

  //         if (user.data) {
  //           console.log('HERE', localUser, user);
  //           localStorage.setItem(
  //             'user',
  //             JSON.stringify({ id: user.data._id, ...user.data.profile })
  //           );
  //           setCurrentUser(user.data);
  //         }
  //       } else {
  //         setCurrentUser({});
  //       }
  //     })();
  //   }, []);

  const auth = (userData) => {
    console.log('SETTING USER', userData);
    const user = { id: userData._id, ...userData.profile };
    localStorage.setItem('user', JSON.stringify(user));
    setCurrentUser(user);
  };

  const signOut = () => {
    localStorage.removeItem('user');
    setCurrentUser({});
  };

  return (
    <AuthContext.Provider value={{ currentUser, auth, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
