import React, { useState } from 'react';
import logopb from '../images/logopb.png';
import { Link, useHistory } from 'react-router-dom';
import accountService from '../services/account';

export const Navbar = (props) => {
  const { currentUserProp, signOutFunc } = props;
  const history = useHistory();
  const [isLogin, setLogin] = useState(false);
  console.log('cu', currentUserProp);
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
      <div className='flex flex-wrap navbar mb-2 shadow-lg bg-gray-900 text-neutral-content rounded-xl'>
        <div className='flex-none px-2 mx-2 align-middle'>
          <span className='text-lg font-bold'>
            <a href='/'>
              <img src={logopb} alt='logopb' className='w-20 h-20' />
            </a>
          </span>
        </div>
        <div class="flex-1 pl-2 ml-2">
        <div class="items-stretch  lg:flex">
          {(currentUserProp)? (
            <div className='items-stretch lg:flex content-center mt-5'>
              <a
                className='flex items-center align-middle text-sm uppercase text-indigo-50 font-black'
                href='/'
              >
                Home
              </a>
              <a
                className='flex-1 btn btn-ghost btn-sm rounded-btn pl-3 py-2 flex items-center text-sm uppercase text-indigo-50 font-black'
                href='/profilepage'>
                Profile
              </a>
              <a
                className='flex-1 btn btn-ghost btn-sm rounded-btn pl-3 py-2 flex items-center text-sm uppercase text-indigo-50 font-black'
                href='/templates'>
                Templates
              </a>
              <a
                className='btn btn-ghost btn-sm rounded-btn px-3 py-2 flex items-center text-sm uppercase text-indigo-50 font-black'
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
            <button class="btn btn-ghost btn-sm rounded-btn pr-1 py-2 flex text-sm uppercase text-indigo-50 font-black object-right"
                href='/'
                onClick={handleClick}>
                    Logout
            </button>
            <button className="btn btn rounded-full bg-white flex items-center justify-center w-10 h-10 mb-3" href='/profilepage'>
              <span className="text-sm uppercase text-gray-800 font-black">
                KS</span>
            </button>
            </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
