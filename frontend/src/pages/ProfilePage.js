import React from "react";
import { SideNavbar } from "../components/SideNavbar";
import { ProfileForm } from "../components/ProfileForm";

export const ProfilePage = ({ currentUserProp, signOutFunc }) => {

  return (
    <div className="grid grid-cols-5 grid-rows-1 p-8 space-x-4">
        <div >
            <SideNavbar currentUser={currentUserProp} signOut={signOutFunc} />
        </div>
        <div className="col-span-4 row-span-1">
            <ProfileForm />
        </div>
    </div>
    );
};