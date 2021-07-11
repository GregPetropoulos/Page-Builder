import React, { useState } from 'react';
import logopb from '../images/logopb.png';
import { Link, useHistory } from 'react-router-dom';
import accountService from '../services/account';

export const Navbar = (props) => {
  const { currentUserProp, signOutFunc } = props;
  const history = useHistory();
  const [isLogin, setLogin] = useState(false);
  const ApiLogOut = accountService.ApiLogOut;

  const handleClick = (e) => {
    e.preventDefault();
    setLogin(!isLogin);
    if (props.currentUserProp) {
      const { email, password } = props.currentUserProp;
      ApiLogOut({ email, password });
    }
    if (history) history.push('/', { noUser: true });
    signOutFunc();
  };

  return (
    <div className='p-3'>
      <div className='flex flex-wrap navbar mb-2 bg-transparent text-neutral-content w-full'>
        <div className='flex px-2 mx-2'>
          <span className='flex-row text-xl lg:text-3xl font-black text-white w-full mt-4'>
            <a href='/'>
              <img src={logopb} alt='logopb' className='w-8 h-8 inline-block' />
              Build-A-Page™
            </a>
          </span>
        </div>
        <div class="flex-1 pl-2 ml-2">
        <div class="items-stretch  lg:flex">
          {(currentUserProp)? (
            <div className='items-stretch lg:flex content-center mt-5'>
              <a
                className='flex items-center align-middle px-4 py-1 rounded-md text-sm uppercase text-gray-900 font-black hover:text-white hover:bg-gray-700'
                href='/'
              >
                Home
              </a>
              <a
                className='flex-1 btn btn-ghost btn-sm rounded-btn px-4 py-1 flex items-center rounded-md text-sm uppercase text-gray-900 font-black hover:text-white hover:bg-gray-700'
                href='/profilepage'>
                Profile
              </a>
              <a
                className='flex-1 btn btn-ghost btn-sm rounded-btn px-4 py-1 flex items-center rounded-md text-sm uppercase text-gray-900 font-black hover:text-white hover:bg-gray-700'
                href='/templates'>
                Templates
              </a>
              <a
                className='btn btn-ghost btn-sm rounded-btn px-4 py-1 flex items-center rounded-md text-sm uppercase text-gray-900 font-black hover:text-white hover:bg-gray-700'
                href='/statistics'
              >
                Statistics
              </a>
            </div>   
          ) : (
            ''
          )}
        </div>
        </div>
        {(currentUserProp)? (
          <div className='inline-flex w-40 mt-5'>
            <button class="btn btn bg-transparent rounded-btn rounded-md px-1 py-2 flex text-sm uppercase text-gray-900 font-black object-right hover:text-white "
                href='/'
                onClick={handleClick}>
                    Logout
            </button>
            <button className="btn btn rounded-full gradient2 flex items-center justify-center w-10 h-10 mb-3" href='/profilepage'>
              <span className="text-sm uppercase text-gray-800 font-black">
                {currentUserProp.firstName ? `${currentUserProp.firstName.charAt(0).toUpperCase()}${currentUserProp.lastName.charAt(0).toUpperCase()}`: currentUserProp.email.slice(0,2)}
              </span>
            </button>
            </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
