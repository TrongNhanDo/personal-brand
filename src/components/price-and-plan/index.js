import React, { useEffect } from 'react';
import { handleScrollTop } from '../common/utils';

const PriceAndPlan = React.memo(() => {
   useEffect(() => {
      handleScrollTop();
   }, []);

   return (
      <div className="container-main bg-black text-white flex flex-col py-10">
         <div className="text-5xl font-bold mt-20">PRICES & PLANS</div>
         <div className="flex w-full mt-72 mb-20">
            <div className="w-1/2 flex">
               <div className="w-1/2 flex flex-col">
                  <div className="text-4xl font-bold">BASIC</div>
                  <div className="mt-20 font-medium text-xl">INCLUDED:</div>
                  <div className="mt-10 font-medium">
                     <ul>
                        <li>• 2x group workouts of your choice</li>
                        <li>• Unlimited gym access</li>
                        <li>• Personal workout</li>
                     </ul>
                  </div>
               </div>
               <div className="text-4xl font-bold">30$</div>
            </div>
            <div className="w-1/2 flex">
               <div className="w-3/5 flex flex-col">
                  <div className="text-4xl font-bold">UNLIMITED</div>
                  <div className="mt-20 font-medium text-xl">INCLUDED:</div>
                  <div className="mt-10 font-medium">
                     <ul>
                        <li>• Unlimited group workouts of your choice</li>
                        <li>• Unlimited gym access</li>
                        <li>• 3x personal workouts</li>
                        <li>• Personal nutrition plan</li>
                     </ul>
                  </div>
               </div>
               <div className="w-2/5 text-4xl font-bold">50$</div>
            </div>
         </div>
      </div>
   );
});

export default PriceAndPlan;
