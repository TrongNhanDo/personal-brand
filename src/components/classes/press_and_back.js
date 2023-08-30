import React, { useEffect } from 'react';
import { handleScrollTop } from '../common/utils';

const PressAndBack = React.memo(() => {
   useEffect(() => {
      handleScrollTop();
   }, []);

   return (
      <div className="container-main flex bg-black py-20 text-justify">
         <div className="w-1/2 text-white flex flex-col justify-center">
            <div className="text-5xl font-bold mb-10">Press & Back</div>
            <div className="text-xl font-medium">Every Day 10:00 AM</div>
            <div className="text-base font-medium mt-10">
               There are few better full-body workouts available than our press
               and back classes. We welcome members of all abilities to our
               classes, and are always keen to help beginners make a start
            </div>
            <div className="text-base font-medium mt-8">
               If you can’t find a class at a time that suits you, please get in
               touch with us, since we often hold spontaneous classes which
               don’t make their way onto the official schedule.
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
                  src={require('../../assets/image/press-and-back2.avif')}
                  alt=""
                  className="mb-10"
               />
               <img
                  src={require('../../assets/image/press-and-back3.avif')}
                  alt=""
               />
            </div>
         </div>
      </div>
   );
});

export default PressAndBack;
