import React, { useEffect } from 'react';
import { handleScrollTop } from '../common/utils';

const Lifting = React.memo(() => {
   useEffect(() => {
      handleScrollTop();
   }, []);

   return (
      <div className="container-main flex bg-black py-20 text-justify">
         <div className="w-1/2 text-white flex flex-col justify-center">
            <div className="text-5xl font-bold mb-10">Lifting</div>
            <div className="text-xl font-medium">Every Day 21:00</div>
            <div className="text-base font-medium mt-10">
               Lifting isn’t just about strength. While you will build great
               core, arm, and leg muscles while lifting, you’ll also develop
               better coordination and an understanding of how your body
               interacts with the world.
            </div>
            <div className="text-base font-medium mt-8">
               Whether you’re already an experienced weightlifter, or have never
               picked up a dumbbell in your life, you’ll find a lot of value in
               our classes.
            </div>
            <div className="mt-20">
               <button className="block px-10 py-5 bg-red-700 font-bold text-white hover:bg-gray-900">
                  BOOK NOW
               </button>
            </div>
         </div>
         <div className="w-1/2 flex justify-end">
            <div className="w-5/6 flex flex-col items-right">
               <img
                  src={require('../../assets/image/lifting2.avif')}
                  alt=""
                  className="mb-10"
               />
               <img src={require('../../assets/image/lifting3.avif')} alt="" />
            </div>
         </div>
      </div>
   );
});

export default Lifting;
