import React, { useState } from "react";
// import { FaEnvelopeOpenText } from "react-icons/fa";
// import { FaRegTrashAlt } from "react-icons/fa";
// import { IoIosLogOut } from "react-icons/io";
import { Link, useHistory } from "react-router-dom";
import accountService from "../services/account";

export const SideNavbar = () => {
  const ApiLogOut = accountService.ApiLogOut
  const history = useHistory();
  const [isLogin, setLogin] = useState(false);

  const handleClick = (e) => {
    console.log("handle check");
    e.preventDefault();
    setLogin(!isLogin);
    ApiLogOut({email:'koaliasanders@gmail.com', password:'password'});//hardcoded to see if it works on logout
    history.push('/', { noUser: true})
  };

  return (
    //<div className="flex">
    <div className="flex flex-wrap">
      {/* Sidebar starts */}
      <div className="w-64 absolute lg:relative bg-white shadow h-screen flex-col justify-between hidden lg:flex pb-12">
        <div className="px-8">
          <ul className="mt-12">
            <li className="flex w-full justify-between text-indigo-700 cursor-pointer items-center mb-6">
              <div className="flex items-center">
                {/* { props.name === "Page" ?
                                            (<Link to="/newpage"><span className="text-sm">New {props.name}</span></Link>):
                                        (<Link to="/newproject"><span className="text-sm">New {props.name}</span></Link>)} */}
                <span className="text-sm"> New Page </span>
              </div>
            </li>
            <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <span className="text-sm">Your Pages </span>
              </div>
            </li>
            <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <span className="inline-flex text-sm"> Share</span>
              </div>
            </li>
            <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <span className="inline-flex text-sm"> Trash</span>
              </div>
            </li>
            <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mb-6">
              <div className="flex items-center">
                <Link
                  to="/"
                  className="inline-flex space-x-4 text-sm"
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
