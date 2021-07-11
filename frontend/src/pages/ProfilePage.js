import React from 'react';
import { ProfileForm } from '../components/ProfileForm';
import DeleteAccount from '../components/DeleteAccount';

export const ProfilePage = ({ currentUserProp, signOutFunc }) => {
  console.log('hit', currentUserProp);
  return (
    <div className='grid grid-cols-5 grid-rows-1 p-8 space-x-4'>
      <div className='col-span-5 row-span-1 mr-2'>
        <ProfileForm
          firstName=''
          lastName=''
          about=''
          github=''
          email={currentUserProp.email}
        />
        <div className="bg-white pb-2 rounded-b-md">
        <DeleteAccount 
        className="ml-20 mb-4"
        currentUser={currentUserProp} />
        </div>
        
      </div>
    </div>
  );
};
