import React, { useEffect } from 'react';
import { handleScrollTop } from '../common/utils';
import { Link } from 'react-router-dom';
import './index.css';

const CardioBoxing = React.memo(() => {
   useEffect(() => {
      handleScrollTop();
   }, []);

   return (
      <div className="item-class container-main flex bg-black py-20 text-justify">
         <div className="subitem-class w-1/2 text-white flex flex-col justify-center">
            <div className="heading1 text-5xl font-bold mb-10">
               Cardio Boxing
            </div>
            <div className="text-xl font-medium">
               Every Monday and Friday 17:00
            </div>
            <div className="text-content text-base font-medium mt-10">
               Sometimes nothing feels as good as putting on your gloves and
               kicking the crap out of a boxing bag or a set of pads. In our
               cardio boxing classes, we’ll focus on great technique and build
               stamina through boxing-inspired routines. There won’t be any
               contact exercises, meaning that you can get the benefits of a
               boxing workout without the fear of breaking someone’s nose.
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
         <div className="subitem-class w-1/2 flex justify-end">
            <div className="w-5/6 flex flex-col items-right">
               <img
                  src={require('../../assets/image/cardio-boxing2.avif')}
                  alt=""
                  className="mb-10"
               />
               <img
                  src={require('../../assets/image/cardio-boxing3.jpg')}
                  alt=""
               />
            </div>
         </div>
      </div>
   );
});

export default CardioBoxing;
