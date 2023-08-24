import React from 'react';
import './banner.css';

const Banner = React.memo(() => {
   return (
      <div className="banner container-main flex flex-col py-10">
         <div className="w-4/5 mt-72 text-7xl font-bold">
            IT'S ALL ABOUT WHAT YOU CAN ACHIEVE
         </div>
         <div className="my-28 text-xl font-bold">
            Empower yourself to make the changes you need to make
         </div>
         <div>
            <button className="block px-10 py-5 bg-red-700 font-bold mb-16">
               LET'S GET STARTED
            </button>
         </div>
      </div>
   );
});

export default Banner;
