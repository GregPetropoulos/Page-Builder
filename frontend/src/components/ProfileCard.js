import React from 'react'

export const ProfileCard = (props) => {
    console.log('dss', props.currentUserProp)
    const { id, firstName, lastName, about, github, email} = props.currentUserProp
    return (
        <div className="bg-white rounded-t-lg p-6 ">
            <div className="container mx-auto">
                <div className='flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center ml-8'>
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
                <div>
                    <h2>Name: {firstName ? `${firstName}  ${lastName}`: 'NA'}</h2>
                    <div>Email: {email}</div>
                    <div>About: {about ? about : 'NA'}</div>
                    <div>Github: {github ? github: 'NA'}</div>
                </div>
            </div>
        </div>
    )
}