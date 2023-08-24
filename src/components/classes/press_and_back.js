import React from 'react';

const PressAndBack = React.memo(() => {
   return (
      <div className="container-main flex bg-black py-20">
         <div className="w-1/2 text-white flex flex-col justify-center">
            <div className="text-5xl font-bold mb-10">Press & Back</div>
            <div className="text-xl font-medium">Every Day 10:00 AM</div>
            <div className="text-base font-medium mt-10">
               There are few better full-body workouts available than our press
               and back classes. We welcome members of all abilities to our
               classes, and are always keen to help beginners make a start
            </div>
            <div className="text-base font-medium mt-8">
               If you can’t find a class at a time that suits you, please get in
               touch with us, since we often hold spontaneous classes which
               don’t make their way onto the official schedule.
            </div>
            <div className="mt-20">
               <button className="block px-10 py-5 bg-red-700 font-bold text-white">
                  BOOK NOW
               </button>
            </div>
         </div>
         <div className="w-1/2 flex justify-end">
            <div className="w-5/6 flex flex-col items-right">
               <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=304,fit=crop/bronxltdlm/pexels-leon-martinez-dWj8Xkvveyf8X9Ep.jpg"
                  alt=""
                  className="mb-10"
               />
               <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=432,fit=crop/bronxltdlm/Rectangle-dWj8XKOE5Kfnz9wZ.png"
                  alt=""
               />
            </div>
         </div>
      </div>
   );
});

export default PressAndBack;
