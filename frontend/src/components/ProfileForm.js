import React, { useState } from 'react';
import accountServices from '../services/account';

// https://blog.logrocket.com/forms-in-react-in-2020/
// As it turns out, the browser handles form state internally by default,
// and we can leverage that to simplify our code!

// https://mattboldt.com/2020/05/02/formdata-with-react-hooks-and-fetch/

export const ProfileForm = ({ firstName, lastName, about, github, email }) => {
  // const { userEmail } = useContext(UserContext);
  console.log('email', email);
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    about: '',
    github: '',
    email,
  });

  const inputsHandler = (e) => {
    console.log('e', e.target.value);
    setProfile({ [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    console.log('submit', profile);
    alert(profile.firstName);
  };
  // let form = useRef(null);
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   console.log('event', event.target)
  //   console.log('form current', form.current)
  //   const data = new FormData(form.current);
  //   console.log({ data });

  //   try {
  //     const response = await accountServices.ApiProfileForm(firstName, lastName, about, github, email);
  //     console.log('response form', response);
  //   } catch (e) {
  //     console.error({ e });
  //   }
  // fetch('/api/users/:id/profile', {
  //   method: 'POST',
  //   body: data,
  // })
  //   .then((res) => res.json())
  //   .then((json) => setProfile(json.profile));

  // //  Unable to connect this front end of the profile post
  // console.log(data);
  // console.log(profile);
  //   console.log('form', form);
  // };

  // using email in UserContext to id the user
  const handleDelete = async () => {
    try {
      const response = await accountServices.ApiDeleteUser(email);
      console.log('dleete front', response);
    } catch (e) {
      console.error({ e });
    }
  }
    //   fetch('/api/users/delete', {
    //     method: 'DELETE',
    //     body: { email },
    //   })
    //     .then((res) => res.json())
    //     .then((json) => setProfile(json.profile));
    // };
    // HANDLE DELETE ACCOUNT WITH USE EFFECT HOOK
    // stuck here

    return (
      <form id='form'>
        <div className='bg-white dark:bg-gray-800'>
          <div className='container mx-auto bg-white dark:bg-gray-800 rounded'>
            <div className='xl:w-full border-b border-gray-300 dark:border-gray-700 py-5 bg-white dark:bg-gray-800'>
              <div className='flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center'>
                <p className='text-lg text-gray-800 dark:text-gray-100 font-bold'>
                  Profile
                </p>
                <div className='ml-2 cursor-pointer text-gray-600 dark:text-gray-400'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    width={16}
                    height={16}
                  >
                    <path
                      className='heroicon-ui'
                      d='M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z'
                      fill='currentColor'
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className='mx-auto'>
              <div className='xl:w-9/12 w-11/12 mx-auto xl:mx-0'>
                <div className='mx-auto pt-4'>
                  <div className='container mx-auto'>
                    <div className='xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6'>
                      <label
                        htmlFor='FirstName'
                        className='pb-2 text-sm font-bold text-gray-800 dark:text-gray-100'
                      >
                        First Name
                      </label>
                      <input
                        type='text'
                        id='FirstName'
                        onChange={inputsHandler}
                        name='firstName'
                        value={profile.firstName}
                        className='border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400'
                      />
                    </div>
                    <div className='xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6'>
                      <label
                        htmlFor='LastName'
                        className='pb-2 text-sm font-bold text-gray-800 dark:text-gray-100'
                      >
                        Last Name
                      </label>
                      <input
                        type='text'
                        id='LastName'
                        onChange={inputsHandler}
                        name='lastName'
                        value={profile.lastName}
                        className='border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400'
                      />
                    </div>
                  </div>
                </div>
                <div className='mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full'>
                  <label
                    htmlFor='about'
                    className='pb-2 text-sm font-bold text-gray-800 dark:text-gray-100'
                  >
                    About
                  </label>
                  <textarea
                    id='about'
                    name='about'
                    onChange={inputsHandler}
                    value={profile.about}
                    className='bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400'
                    placeholder='Let the world know who you are'
                    rows={5}
                  />
                  <p className='w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400'>
                    Character Limit: 200
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container mx-auto w-11/12 xl:w-full'>
          <div className='w-full py-4 sm:px-0 bg-white dark:bg-gray-800 flex justify-end'>
            <button className='bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 dark:bg-gray-700 rounded text-indigo-600 dark:text-indigo-600 px-6 py-2 text-xs mr-4'>
              Cancel
            </button>
            <button
              className='bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm'
              type='submit'
              onClick={handleSubmit}
            >
              Save
            </button>
            <button
              className='bg-red-700 focus:outline-none transition duration-150 ease-in-out hover:bg-yellow-600 rounded text-white px-8 py-2 text-sm mx-2'
              onClick={handleDelete}
              type='submit'
            >
              Delete Account
            </button>
          </div>
        </div>
      </form>
    );
};

