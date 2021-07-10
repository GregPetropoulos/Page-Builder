import React, { useState } from 'react';
import logopb from '../images/logopb.png';
import { Link, useHistory } from 'react-router-dom';
import accountService from '../services/account';

export const Navbar = (props) => {
  const { currentUserProp, signOutFunc } = props;
  const history = useHistory();
  const [isLogin, setLogin] = useState(false);
  console.log('cu', currentUserProp)
  const ApiLogOut = accountService.ApiLogOut;

  const handleClick = (e) => {
    e.preventDefault();
    setLogin(!isLogin);
    if (props.currentUserProp) {
      const { email, password } = props.currentUserProp
      ApiLogOut({ email, password });
    }
    if (history) history.push('/', { noUser: true });
    signOutFunc();
  };


  return (
    <div className='p-3'>
      <div className='flex flex-wrap navbar mb-2 shadow-lg bg-gray-800 text-neutral-content rounded-xl'>
        <div className='flex-none px-2 mx-2 align-middle'>
          <span className='text-lg font-bold'>
            <a href='/'>
              <img src={logopb} alt='logopb' className='w-20 h-20' />
            </a>
          </span>
        </div>
        <div className='flex'>
          {(currentUserProp)? (
            <div className='items-stretch hidden lg:flex content-center'>
              <a
                className='flex items-center align-middle text-sm uppercase text-indigo-50 font-black'
                href='/'>
                Home
              </a>
              <a
                className='flex items-center align-middle text-sm uppercase text-indigo-50 font-black px-3 py-2'
                href='/profilepage'>
                Profile
              </a>
              <a
                className='flex items-center align-middle text-sm uppercase text-indigo-50 font-black px-3 py-2'
                href='/templates'>
                Templates
              </a>
              <a
                className='flex items-center align-middle text-sm uppercase text-indigo-50 font-black px-3 py-2'
                href='/'
                onClick={handleClick}>
                Logout
              </a>
            </div>   
          ) : (
            ''
          )}
        </div>
        {(currentUserProp)? (
          <div className='flex float-right'>
            <div className='avatar'>
              <div className='rounded-xl'>
                <img
                  src='https://i.pravatar.cc/500?img=32'
                  className='rounded-full w-10 h-10 m-1 float-right'
                  alt='avatar'
                />
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
