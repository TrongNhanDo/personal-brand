import React from 'react';
import './popularClasses.css';
import { Link } from 'react-router-dom';

const PopularClasses = React.memo(() => {
   return (
      <div className="container-main my-24">
         <div className="text-5xl font-bold">POPULAR CLASSES</div>
         <div className="flex w-full mt-20">
            <div className="w-1/2 flex flex-col">
               <Link to="/popular-classes/cardio" className="hover:opacity-90">
                  <img
                     src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=368,fit=crop/bronxltdlm/lalalalaldsfdfsgd-mp01aEkz4pC4bE1J.png"
                     alt=""
                     className="w-4/5 h-auto"
                  />
               </Link>
               <span className="mt-5 text-3xl font-bold">Cardio</span>
            </div>
            <div className="w-1/2 flex flex-col items-end">
               <Link
                  to="/popular-classes/air-yoga"
                  className="w-4/5 h-auto hover:opacity-90"
               >
                  <img
                     src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=368,fit=crop/bronxltdlm/woman-in-black-sports-bra-and-black-pants-sitting-on-white-m26LKr5ZNeiyXWBK.jpg"
                     alt=""
                  />
               </Link>
               <span className="mt-5 text-3xl font-bold">AirYoga</span>
            </div>
         </div>
         <div className="flex w-full mt-20">
            <div className="w-1/2 flex flex-col">
               <Link to="/popular-classes/lifting" className="hover:opacity-90">
                  <img
                     src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=368,fit=crop/bronxltdlm/Rectangle-YbxWoy3LQXubRjXv.png"
                     alt=""
                     className="w-4/5 h-auto"
                  />
               </Link>
               <span className="w-full mt-5 text-3xl font-bold">Lifting</span>
            </div>
            <div className="w-1/2 flex flex-col items-end">
               <Link
                  to="/popular-classes/press-and-back"
                  className="w-4/5 h-auto hover:opacity-90"
               >
                  <img
                     src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=368,fit=crop/bronxltdlm/woman-lifting-barbell-m57zVrgrrLSW97Vy.jpg"
                     alt=""
                  />
               </Link>
               <span className="mt-5 text-3xl font-bold">Press & Back</span>
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

export default PopularClasses;
