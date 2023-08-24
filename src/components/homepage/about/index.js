import React from 'react';
import './about.css';

const About = React.memo(() => {
   return (
      <div className="container-main about py-28">
         <div className="w-1/2">
            <div className="text-5xl font-bold mb-14">ABOUT BRONX</div>
            <div className="text-base font-medium">
               We’re not here to carry you to fitness, we’re here to motivate
               you to carry yourself to your goals.
            </div>
            <div className="text-base font-medium mt-8">
               If you’re not sure what your goals are, or don’t know where to
               start on your fitness journey, come in and speak to one of our
               qualified trainers who can help you develop a plan.
            </div>
            <div className="mt-20">
               <button className="block px-10 py-5 bg-red-700 font-bold text-white">
                  SCHEDULE
               </button>
            </div>
         </div>
      </div>
   );
});

export default About;
