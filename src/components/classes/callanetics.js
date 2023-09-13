import React, { useEffect } from 'react';
import { handleScrollTop } from '../common/utils';
import { Link } from 'react-router-dom';
import './index.css';

const Callanetics = React.memo(() => {
   useEffect(() => {
      handleScrollTop();
   }, []);

   return (
      <div className="item-class container-main flex bg-black py-20 text-justify">
         <div className="subitem-class w-1/2 text-white flex flex-col justify-center">
            <div className="heading1 text-5xl font-bold mb-10">Callanetics</div>
            <div className="text-xl font-medium">Every Tuesday at 16:00</div>
            <div className="text-content text-base font-medium mt-10">
               Callanetics is the ideal form of exercise for anyone who wants to
               avoid high-impact but tone up all the same.
            </div>
            <div className="text-content text-base font-medium mt-8">
               Focusing on working the deep muscles, this class helps you
               achieve better posture and safeguards you from developing
               injuries that come with a weak core. Our callanetics classes are
               open for all ages.
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
                  src={require('../../assets/image/callanetics2.avif')}
                  alt=""
                  className="mb-10"
               />
               <img
                  src={require('../../assets/image/callanetics3.avif')}
                  alt=""
               />
            </div>
         </div>
      </div>
   );
});

export default Callanetics;
