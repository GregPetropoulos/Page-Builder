import React from 'react';
import accountServices from '../services/account';

const DeleteAccount = (props) => {
  const { _id } = props.currentUser;
  const handleDeleted = async () => {
    try {
      const data = await accountServices.ApiDeleteUser(_id);
      console.log('delete data in try catch', data);
    } catch (error) {
      console.error({ error });
    }
  };
  return (
    <button
      className='bg-red-700 focus:outline-none transition duration-150 ease-in-out hover:bg-yellow-600 rounded text-white px-8 py-2 text-sm mx-2'
      onClick={handleDeleted}
      type='submit'
    >
      Delete Account
    </button>
  );
};

export default DeleteAccount;
