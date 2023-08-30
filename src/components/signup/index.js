import React, { useEffect } from 'react';
import { handleScrollTop } from '../common/utils';

const SignUp = React.memo(() => {
   useEffect(() => {
      handleScrollTop();
   }, []);

   return (
      <div className="container-main bg-black text-white flex flex-col py-10">
         <div className="text-5xl font-bold mt-20">SIGN UP FOR A WORKOUT</div>
         <div className="w-2/5 flex flex-col mt-44">
            <div className="w-full flex flex-col font-normal">
               <label htmlFor="firstName">Name*</label>
               <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Your name"
                  className="p-3 bg-gray-400 text-black placeholder:text-gray-500 hover:bg-white"
               />
            </div>
            <div className="w-full flex flex-col mt-5 font-normal">
               <label htmlFor="lastName">Last name*</label>
               <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Your last name"
                  className="p-3 bg-gray-400 text-black placeholder:text-gray-500 hover:bg-white"
               />
            </div>
            <div className="w-full flex flex-col mt-5 font-normal">
               <label htmlFor="email">Email address*</label>
               <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email address"
                  className="p-3 bg-gray-400 text-black placeholder:text-gray-500 hover:bg-white"
               />
            </div>
            <div className="w-full flex flex-col mt-5 font-normal">
               <label htmlFor="message">Your message*</label>
               <textarea
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Enter your message"
                  className="p-3 bg-gray-400 text-black placeholder:text-gray-500 hover:bg-white"
               ></textarea>
            </div>
            <div className="w-full flex mt-5 font-normal mb-32">
               <button
                  type="button"
                  className="font-medium px-12 py-4 bg-red-700 hover:bg-gray-900"
               >
                  SUBMIT
               </button>
            </div>
         </div>
      </div>
   );
});

export default SignUp;
