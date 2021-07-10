import React from 'react';
import { ProfileForm } from '../components/ProfileForm';
import DeleteAccount from '../components/DeleteAccount';

export const ProfilePage = ({ currentUserProp, signOutFunc }) => {
  console.log('hit', currentUserProp);
  return (
    <div className='grid grid-cols-5 grid-rows-1 p-8 space-x-4'>
      <div className='col-span-4 row-span-1'>
        <ProfileForm
          firstName=''
          lastName=''
          about=''
          github=''
          email={currentUserProp.email}
        />
        <DeleteAccount currentUser={currentUserProp} />
      </div>
    </div>
  );
};
