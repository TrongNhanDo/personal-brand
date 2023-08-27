import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { handleScrollTop } from '../common/utils';

const Classes = React.memo(() => {
   useEffect(() => {
      handleScrollTop();
   }, []);

   return (
      <div className="container-main py-24 bg-black text-white">
         <div className="text-5xl font-bold">CLASSES</div>
         <div className="flex w-full mt-20">
            <div className="w-1/2 flex flex-col">
               <img
                  src={require('../../assets/image/callanetics1.avif')}
                  alt=""
                  className="w-4/5 h-auto"
               />
               <Link
                  to="/classes/callanetics"
                  className="mt-5 text-3xl font-bold underline decoration-white"
               >
                  Callanetics
               </Link>
            </div>
            <div className="w-1/2 flex flex-col items-end">
               <img
                  src={require('../../assets/image/air-yoga4.avif')}
                  alt=""
                  className="w-4/5 h-auto"
               />
               <Link
                  to="/classes/air-yoga"
                  className="mt-5 text-3xl font-bold underline decoration-white"
               >
                  Air Yoga
               </Link>
            </div>
         </div>
         <div className="flex w-full mt-20">
            <div className="w-1/2 flex flex-col">
               <img
                  src={require('../../assets/image/sport-dances1.avif')}
                  alt=""
                  className="w-4/5 h-auto"
               />
               <Link
                  to="/classes/sport-dances"
                  className="w-full mt-5 text-3xl font-bold underline decoration-white"
               >
                  Sport Dances
               </Link>
            </div>
            <div className="w-1/2 flex flex-col items-end">
               <img
                  src={require('../../assets/image/lifting4.avif')}
                  alt=""
                  className="w-4/5 h-auto"
               />
               <Link
                  to="/classes/lifting"
                  className="mt-5 text-3xl font-bold underline decoration-white"
               >
                  Lifting
               </Link>
            </div>
         </div>
         <div className="flex w-full mt-20">
            <div className="w-1/2 flex flex-col">
               <img
                  src={require('../../assets/image/cardio-boxing1.avif')}
                  alt=""
                  className="w-4/5 h-auto"
               />
               <Link
                  to="/classes/cardio-boxing"
                  className="w-full mt-5 text-3xl font-bold underline decoration-white"
               >
                  Cardio Boxing
               </Link>
            </div>
            <div className="w-1/2 flex flex-col items-end">
               <img
                  src={require('../../assets/image/cardio4.avif')}
                  alt=""
                  className="w-4/5 h-auto"
               />
               <Link
                  to="/classes/cardio"
                  className="mt-5 text-3xl font-bold underline decoration-white"
               >
                  Cardio
               </Link>
            </div>
         </div>
         <div className="flex w-full mt-20">
            <div className="w-1/2 flex flex-col">
               <img
                  src={require('../../assets/image/press-and-back1.avif')}
                  alt=""
                  className="w-4/5 h-auto"
               />
               <Link
                  to="/classes/press-and-back"
                  className="w-full mt-5 text-3xl font-bold underline decoration-white"
               >
                  Press & Back
               </Link>
            </div>
            <div className="w-1/2 flex flex-col items-end">
               <img
                  src={require('../../assets/image/body-building1.avif')}
                  alt=""
                  className="w-4/5 h-auto"
               />
               <Link
                  to="/classes/body-building"
                  className="mt-5 text-3xl font-bold underline decoration-white"
               >
                  Body Building
               </Link>
            </div>
         </div>
         <div className="mt-20 flex justify-center">
            <button className="block px-10 py-5 bg-red-700 font-bold text-white">
               CHECK ALL CLASSES
            </button>
         </div>
      </div>
   );
});

export default Classes;
