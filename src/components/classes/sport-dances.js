import React, { useEffect } from 'react';
import { handleScrollTop } from '../common/utils';
import { Link } from 'react-router-dom';
import './index.css';

const SportDances = React.memo(() => {
   useEffect(() => {
      handleScrollTop();
   }, []);

   return (
      <div className="item-class container-main flex bg-black py-20 text-justify">
         <div className="subitem-class w-1/2 text-white flex flex-col justify-center">
            <div className="heading1 text-5xl font-bold mb-10">
               Sport Dances
            </div>
            <div className="text-xl font-medium">Every Thursday 18:00</div>
            <div className="text-content text-base font-medium mt-10">
               Let your hair down and lose yourself to music in our
               high-intensity sport dance classes. With mood lighting, this
               class has been a hit ever since it was introduced.
            </div>
            <div className="text-content text-base font-medium mt-8">
               We aim to combine dancing with cardio exercises in this class,
               meaning that even if you have two left feet, you can still break
               a sweat and enjoy the beat. Our top instructors make sure that
               everyone leaves this class with a big, wide grin on their face.
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
                  src={require('../../assets/image/sport-dances2.avif')}
                  alt=""
                  className="mb-10"
               />
               <img
                  src={require('../../assets/image/sport-dances3.avif')}
                  alt=""
               />
            </div>
         </div>
      </div>
   );
});

export default SportDances;
