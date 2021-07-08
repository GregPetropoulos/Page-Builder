import logopb from '../images/logopb.png';

export const Navbar = (props) => {
  const { currentUserProp } = props;
  return (
    <div className='p-3'>
      <div className='flex flex-wrap navbar mb-2 shadow-lg bg-gray-800 text-neutral-content rounded-xl'>
        <div className='flex-none px-2 mx-2 align-middle'>
          <span className='text-lg font-bold'>
            <img src={logopb} alt='logopb' className='w-20 h-20' />
          </span>
        </div>
        <div className='flex'>
          {currentUserProp ? (
            <div className='items-stretch hidden lg:flex content-center'>
              <a
                className='flex items-center align-middle text-sm uppercase text-indigo-50 font-black'
                href='/'
              >
                Home
              </a>
              <a
                className='btn btn-ghost btn-sm rounded-btn px-3 py-2 flex items-center text-sm uppercase text-indigo-50 font-black'
                href='/profilepage'
              >
                Profile
              </a>
              <a
                className='btn btn-ghost btn-sm rounded-btn px-3 py-2 flex items-center text-sm uppercase text-indigo-50 font-black'
                href='/templates'
              >
                Templates
              </a>
            </div>
          ) : (
            ''
          )}
        </div>
        {currentUserProp ? (
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
