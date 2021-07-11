import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import accountServices from '../services/account';

const DeleteAccount = (props) => {
  const { signOut } = useContext(AuthContext);
  const { id } = props.currentUser;
  const handleDeleted = async () => {
    try {
      await accountServices.ApiDeleteUser(id);

      signOut();
    } catch (error) {
      console.error({ error });
    }
  };
  return (
    <button
      className='bg-red-700 focus:outline-none transition duration-150 ease-in-out hover:bg-yellow-600 rounded text-white px-8 py-2 text-sm ml-60 mb-4'
      onClick={handleDeleted}
      type='submit'
    >
      Delete Account
    </button>
  );
};

export default DeleteAccount;
