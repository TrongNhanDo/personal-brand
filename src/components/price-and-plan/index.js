import React, { useEffect } from 'react';
import { handleScrollTop } from '../common/utils';
import './price-and-plan.css';

const PriceAndPlan = React.memo(() => {
   useEffect(() => {
      handleScrollTop();
   }, []);

   return (
      <div className="price-and-plan container-main bg-black text-white flex flex-col py-10">
         <div className="heading1 text-5xl font-bold mt-20">PRICES & PLANS</div>
         <div className="div-content flex w-full mb-20">
            <div className="div-item w-1/2 flex">
               <div className="div-item1 w-1/2 flex flex-col">
                  <div className="heading2 text-4xl font-bold">BASIC</div>
                  <div className="mt-20 font-medium text-xl">INCLUDED:</div>
                  <div className="mt-10 font-medium">
                     <ul>
                        <li>• 2x group workouts</li>
                        <li>• Unlimited gym access</li>
                        <li>• Personal workout</li>
                     </ul>
                  </div>
               </div>
               <div className="div-item2 text-4xl font-bold">30$</div>
            </div>
            <div className="div-item w-1/2 flex">
               <div className="div-item1 w-3/5 flex flex-col">
                  <div className="heading2 text-4xl font-bold">UNLIMITED</div>
                  <div className="mt-20 font-medium text-xl">INCLUDED:</div>
                  <div className="mt-10 font-medium">
                     <ul>
                        <li>• Unlimited group workouts</li>
                        <li>• Unlimited gym access</li>
                        <li>• 3x personal workouts</li>
                        <li>• Personal nutrition plan</li>
                     </ul>
                  </div>
               </div>
               <div className="div-item2 w-2/5 text-4xl font-bold">50$</div>
            </div>
         </div>
      </div>
   );
});

export default PriceAndPlan;
