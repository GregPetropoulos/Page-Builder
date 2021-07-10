import React from 'react';
import {useState} from 'react';
import accountServices from '../services/account';


export default function PublishModal() {
  const [showModal, setShowModal] = useState(false);
const [linkInput, setLinkInput] =useState({
    link:'',
    folder:'',
});
  
// User inputs update the state
const linkHandler = (e) => {
    console.log('e', e.target.value);
    console.log('e', e.target.name);

    setLinkInput({...linkInput, [e.target.name]:e.target.value});

}
const publishHandler =async (event) => {
    event.preventDefault();
    const {link, folder} = linkInput
     
     try {
        const sendLink = await accountServices.ApiPublishForm(link`($.github.io/)`,folder);
        console.log('publish check', sendLink)

        
     } catch (e) {
         console.error({e})
     }
  }
  return (
    <>
      <button
        className='bg-yellow-500 text-white active:bg-Pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
        type='button'
        onClick={() => setShowModal(true)}
      >
        Publish
      </button>
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
                  <h3 className='text-3xl font-semibold'>
                    Publish to GitHub Pages
                  </h3>
                  <button
                    className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                    onClick={() => setShowModal(false)}
                  >
                    <span className='bg-blue text-red h-6 w-6 text-2xl block outline-none focus:outline-none'>
                      x
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className='relative p-6 flex-auto'>
                  <p className='my-4 text-blueGray-500 text-lg leading-relaxed'>
                   Publish this template to your GitHub pages. If you do not have a github account <a href='https://docs.github.com/en/get-started/signing-up-for-github/signing-up-for-a-new-github-account'>create a github account</a>
                   <p>Enter your GitHub username and folder you would like this template to be published with. </p>
                  </p>
                  <form id='form'>
                    <div>
                      <label
                        htmlFor='github-link'
                        className='pb-2 text-sm font-bold text-gray-800 dark:text-gray-100'
                      ></label>
                      <input
                        type='text'
                        id='github-link'
                          onChange={linkHandler}
                        name='github-link'
                        placeholder='your username'
                        //   value=''
                        className='border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400'
                      />
                      github.io/
                      <input
                        type='text'
                        id='github-folder'
                          onChange={linkHandler}
                        name='github-folder'
                        placeholder='your folder'
                        //   value=''
                        className='border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 dark:text-gray-400'
                      />
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className='bg-yellow-500 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    // type='button'
                    // onClick={() => setShowModal(false)}
                    type='submit'
                    onClick={publishHandler}
                    >
                    Publish
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}

    </>
  );
}
