import React, { useEffect } from 'react';
import { handleScrollTop } from '../common/utils';

const AirYoga = React.memo(() => {
   useEffect(() => {
      handleScrollTop();
   }, []);

   return (
      <div className="container-main flex bg-black py-20">
         <div className="w-1/2 text-white flex flex-col justify-center">
            <div className="text-5xl font-bold mb-10">Air Yoga</div>
            <div className="text-xl font-medium">
               Every Wednesday and Saturday 8:00 AM
            </div>
            <div className="text-base font-medium mt-10">
               Sure, you’ve heard or regular yoga, but what about trying out
               some new moves while floating feet into the air?
            </div>
            <div className="text-base font-medium mt-8">
               Air yoga is an interdisciplinary workout that combines the
               flexibility and technique of regular yoga with the strength
               building of hanging. Whether you’ve tried air yoga before or are
               a total beginner, you’re welcome in our classes.
            </div>
            <div className="mt-20">
               <button className="block px-10 py-5 bg-red-700 font-bold text-white">
                  BOOK NOW
               </button>
            </div>
         </div>
         <div className="w-1/2 flex justify-end">
            <div className="w-5/6 flex flex-col items-right">
               <img
                  src={require('../../assets/image/air-yoga1.avif')}
                  alt=""
                  className="mb-10"
               />
               <img src={require('../../assets/image/air-yoga2.avif')} alt="" />
            </div>
         </div>
      </div>
   );
});

export default AirYoga;
