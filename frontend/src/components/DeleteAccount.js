import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import accountServices from '../services/account';

export const DeleteAccount = (props) => {
  const { signOut } = useContext(AuthContext);
  const id  = props.userId;

  const handleDeleted = async () => {
    console.log('handleDeleted')
    console.log('user', localStorage.user)
    try {
      console.log('user ww', localStorage.user)
      const response = await accountServices.ApiDeleteUser(id);

      // signOut();
      console.log('user', localStorage.user)
      localStorage.removeItem('user')
      window.location.reload()
      // console.log('deleted', response)
      // props.signOutFunc();
    } catch (error) {
      console.error({ error });
    }
  };
  return (
    <button
      className='bg-red-700 focus:outline-none transition duration-150 ease-in-out hover:bg-yellow-600 rounded text-white px-8 py-2 text-sm ml-3'
      onClick={handleDeleted}
      type='submit'>
      Delete Account
    </button>
  );
};
