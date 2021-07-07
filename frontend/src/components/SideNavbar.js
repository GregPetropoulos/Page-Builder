import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import accountService from '../services/account';

export const SideNavbar = (props) => {
  const ApiLogOut = accountService.ApiLogOut;
  const history = useHistory();
  const [isLogin, setLogin] = useState(false);
  const { email, password } = props.currentUser;
  const handleClick = (e) => {
    e.preventDefault();
    setLogin(!isLogin);

    ApiLogOut({ email, password });
    props.signOut();
    history.push('/', { noUser: true });
  };

  return (
    <div className='flex flex-wrap'>
      {/* Sidebar starts */}
      <div className='w-64 absolute lg:relative bg-gray-800 shadow h-screen flex-col justify-between hidden lg:flex pb-12 rounded-xl'>
        <div className='px-8'>
          <ul className='mt-12'>
            <li className='flex w-full justify-between text-indigo-700 cursor-pointer items-center mb-6'>
              <div className='flex items-center'>
                {/* { props.name === "Page" ?
                                            (<Link to="/newpage"><span className="text-sm">New {props.name}</span></Link>):
                                        (<Link to="/newproject"><span className="text-sm">New {props.name}</span></Link>)} */}
                <span className='text-sm uppercase text-indigo-50 font-black'>
                  New Page
                </span>
              </div>
            </li>
            <li className='flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6'>
              <div className='flex items-center'>
                <span className='text-sm uppercase text-indigo-50 font-black'>
                  Your Pages
                </span>
              </div>
            </li>
            <li className='flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6'>
              <div className='flex items-center'>
                <span className='text-sm uppercase text-indigo-50 font-black'>
                  Share
                </span>
              </div>
            </li>
            <li className='flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6'>
              <div className='flex items-center'>
                <span className='text-sm uppercase text-indigo-50 font-black'>
                  Trash
                </span>
              </div>
            </li>
            <li className='flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6'>
              <div className='flex items-center'>
                <Link
                  to='/'
                  className='text-sm uppercase text-indigo-50 font-black'
                  onClick={handleClick}
                >
                  Logout
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    // </div>
  );
};
