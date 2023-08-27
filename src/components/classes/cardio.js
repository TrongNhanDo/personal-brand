import React, { useEffect } from 'react';
import { handleScrollTop } from '../common/utils';

const Cardio = React.memo(() => {
   useEffect(() => {
      handleScrollTop();
   }, []);

   return (
      <div className="container-main flex bg-black py-20 text-justify">
         <div className="w-1/2 text-white flex flex-col justify-center">
            <div className="text-5xl font-bold mb-10">CARDIO</div>
            <div className="text-xl font-medium">Every Day 8:00 PM</div>
            <div className="text-base font-medium mt-10">
               A solid cardio workout is the backbone of an effective workout
               regime, which is why we run cardio classes twice daily.
            </div>
            <div className="text-base font-medium mt-8">
               Whether you’re right at the start of a weight loss journey, or
               simply looking to tone up and keep fit, our cardio classes will
               put you through your paces and keep you on top form.
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
                  src={require('../../assets/image/cardio2.avif')}
                  alt=""
                  className="mb-10"
               />
               <img src={require('../../assets/image/cardio3.avif')} alt="" />
            </div>
         </div>
      </div>
   );
});

export default Cardio;
