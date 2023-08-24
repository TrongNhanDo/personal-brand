import React from 'react';

const Lifting = React.memo(() => {
   return (
      <div className="container-main flex bg-black py-20">
         <div className="w-1/2 text-white flex flex-col justify-center">
            <div className="text-5xl font-bold mb-10">Lifting</div>
            <div className="text-xl font-medium">Every Day 21:00</div>
            <div className="text-base font-medium mt-10">
               Lifting isn’t just about strength. While you will build great
               core, arm, and leg muscles while lifting, you’ll also develop
               better coordination and an understanding of how your body
               interacts with the world.
            </div>
            <div className="text-base font-medium mt-8">
               Whether you’re already an experienced weightlifter, or have never
               picked up a dumbbell in your life, you’ll find a lot of value in
               our classes.
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
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=304,fit=crop/bronxltdlm/keeeeliaaaa-AVVlw6alo1cEBMeR.png"
                  alt=""
                  className="mb-10"
               />
               <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=432,fit=crop/bronxltdlm/pexels-leon-martinez-AwG67pMME3ILLj23.jpg"
                  alt=""
               />
            </div>
         </div>
      </div>
   );
});

export default Lifting;
