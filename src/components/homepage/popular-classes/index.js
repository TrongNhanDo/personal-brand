import React from 'react';
import './popularClasses.css';
import { Link } from 'react-router-dom';

const PopularClasses = React.memo(() => {
   return (
      <div className="container-main my-24">
         <div className="text-5xl font-bold">POPULAR CLASSES</div>
         <div className="flex w-full mt-20">
            <div className="w-1/2 flex flex-col">
               <Link to="/classes/cardio" className="hover:opacity-90">
                  <img
                     src="/image/cardio1.avif"
                     alt=""
                     className="w-4/5 h-auto"
                  />
               </Link>
               <span className="mt-5 text-3xl font-bold">Cardio</span>
            </div>
            <div className="w-1/2 flex flex-col items-end">
               <Link
                  to="/classes/air-yoga"
                  className="w-4/5 h-auto hover:opacity-90"
               >
                  <img src="/image/air-yoga1.avif" alt="" />
               </Link>
               <span className="mt-5 text-3xl font-bold">AirYoga</span>
            </div>
         </div>
         <div className="flex w-full mt-20">
            <div className="w-1/2 flex flex-col">
               <Link to="/classes/lifting" className="hover:opacity-90">
                  <img
                     src="/image/lifting1.avif"
                     alt=""
                     className="w-4/5 h-auto"
                  />
               </Link>
               <span className="w-full mt-5 text-3xl font-bold">Lifting</span>
            </div>
            <div className="w-1/2 flex flex-col items-end">
               <Link
                  to="/classes/press-and-back"
                  className="w-4/5 h-auto hover:opacity-90"
               >
                  <img src="/image/press-and-back1.avif" alt="" />
               </Link>
               <span className="mt-5 text-3xl font-bold">Press & Back</span>
            </div>
         </div>
         <div className="mt-20 flex justify-center">
            <Link
               to="/classes"
               className="block px-10 py-5 bg-red-700 font-bold text-white"
            >
               CHECK ALL CLASSES
            </Link>
         </div>
      </div>
   );
});

export default PopularClasses;
