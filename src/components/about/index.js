import React, { useEffect } from 'react';
import { handleScrollTop } from '../common/utils';
import './about.css';

const About = React.memo(() => {
   useEffect(() => {
      handleScrollTop();
   }, []);

   return (
      <div className="div-about container-main bg-black text-white flex flex-col py-20">
         <div className="heading1 text-5xl font-bold mt-10">SCHEDULE</div>
         <div className="div-item flex w-full">
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
         <div className="div-item flex w-full">
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
