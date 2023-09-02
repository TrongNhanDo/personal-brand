import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { handleScrollTop } from '../common/utils';

const BodyBuilding = React.memo(() => {
   useEffect(() => {
      handleScrollTop();
   }, []);

   return (
      <div className="container-main flex bg-black py-20 text-justify">
         <div className="w-1/2 text-white flex flex-col justify-center">
            <div className="text-5xl font-bold mb-10">Body Building</div>
            <div className="text-xl font-medium">
               Every Monday and Wednesday 14:00
            </div>
            <div className="text-base font-medium mt-10">
               Want to tone, get muscle definition, and feel stronger in your
               everyday life? Then our body-building classes are made for you.
            </div>
            <div className="text-base font-medium mt-8">
               You’ll be walked through a set of exercises together with our top
               coaches at the start of the class with different rotations and
               number of repetitions as the weeks go by. Pair this with our
               cardio and cardio boxing classes for maximum effect.
            </div>
            <div className="mt-20">
               <Link
                  to="/price-and-plan"
                  className="w-fit block px-10 py-5 bg-red-700 font-bold text-white hover:bg-gray-900"
               >
                  BOOK NOW
               </Link>
            </div>
         </div>
         <div className="w-1/2 flex justify-end">
            <div className="w-5/6 flex flex-col items-right">
               <img
                  src={require('../../assets/image/body-building2.avif')}
                  alt=""
                  className="mb-10"
               />
               <img
                  src={require('../../assets/image/body-building3.avif')}
                  alt=""
               />
            </div>
         </div>
      </div>
   );
});

export default BodyBuilding;
