import React from 'react';

const Cardio = React.memo(() => {
   return (
      <div className="container-main flex bg-black py-20">
         <div className="w-1/2 text-white flex flex-col justify-center">
            <div className="text-5xl font-bold mb-10">CARDIO</div>
            <div className="text-xl font-medium">Every Day 8:00 PM</div>
            <div className="text-base font-medium mt-10">
               A solid cardio workout is the backbone of an effective workout
               regime, which is why we run cardio classes twice daily.
            </div>
            <div className="text-base font-medium mt-8">
               Whether you’re right at the start of a weight loss journey, or
               simply looking to tone up and keep fit, our cardio classes will
               put you through your paces and keep you on top form.
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
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=304,fit=crop/bronxltdlm/pexels-li-sun-YBB23z2yv3HvqezM.jpg"
                  alt=""
                  className="mb-10"
               />
               <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=503,h=432,fit=crop/bronxltdlm/pexels-li-sun-A83boBxwyEUWLN2W.jpg"
                  alt=""
               />
            </div>
         </div>
      </div>
   );
});

export default Cardio;
