import React, { useEffect } from 'react';
import { handleScrollTop } from '../common/utils';

const About = React.memo(() => {
   useEffect(() => {
      handleScrollTop();
   }, []);

   return (
      <div className="container-main bg-black text-white flex flex-col py-10">
         <div className="text-5xl font-bold mt-20">SCHEDULE</div>
         <div className="flex w-full mt-64 mb-44">
            <div className="w-3/5 flex">
               <div className="w-1/2 flex flex-col">
                  <div className="text-4xl font-bold">MONDAY</div>
                  <div className="mt-14 flex flex-col text-xl font-medium">
                     <span>8:00 - 8:50</span>
                     <span>Air yoga</span>
                  </div>
                  <div className="mt-14 flex flex-col text-xl font-medium">
                     <span>2:00 - 2:45</span>
                     <span>Body building</span>
                  </div>
               </div>
            </div>
            <div className="w-2/5 flex">
               <div className="w-1/2 flex flex-col">
                  <div className="text-4xl font-bold">TUESDAY</div>
                  <div className="mt-14 flex flex-col text-xl font-medium">
                     <span>4:30 - 5:30</span>
                     <span>Air yoga</span>
                  </div>
                  <div className="mt-14 flex flex-col text-xl font-medium">
                     <span>5:30 - 6:30</span>
                     <span>Body building</span>
                  </div>
               </div>
            </div>
         </div>
         <div className="flex w-full mb-20">
            <div className="w-3/5 flex">
               <div className="w-1/2 flex flex-col">
                  <div className="text-4xl font-bold">WEDNESDAY</div>
                  <div className="mt-14 flex flex-col text-xl font-medium">
                     <span>8:00 - 8:50</span>
                     <span>Air yoga</span>
                  </div>
                  <div className="mt-14 flex flex-col text-xl font-medium">
                     <span>2:00 - 2:45</span>
                     <span>Body building</span>
                  </div>
               </div>
            </div>
            <div className="w-2/5 flex">
               <div className="w-1/2 flex flex-col">
                  <div className="text-4xl font-bold">THURSDAY</div>
                  <div className="mt-14 flex flex-col text-xl font-medium">
                     <span>4:30 - 5:30</span>
                     <span>Air yoga</span>
                  </div>
                  <div className="mt-14 flex flex-col text-xl font-medium">
                     <span>5:30 - 6:30</span>
                     <span>Body building</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
});

export default About;
