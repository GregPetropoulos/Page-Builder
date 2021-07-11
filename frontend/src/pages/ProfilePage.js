import React from 'react';
import { ProfileForm } from '../components/ProfileForm';
import { ProfileCard } from '../components/ProfileCard';

export const ProfilePage = ({ currentUserProp, signOutFunc }) => {
  return (
    <div className='grid grid-cols-5 grid-rows-1 p-8 space-x-4'>
      <div className='col-span-5 row-span-1 mr-2'>
        <ProfileCard currentUserProp={currentUserProp}/>
        <ProfileForm
          firstName=''
          lastName=''
          about=''
          github=''
          email={currentUserProp.email}
          userId={currentUserProp.id}
          signOutFunc={signOutFunc}
        />
      </div>
    </div>
  );
};
