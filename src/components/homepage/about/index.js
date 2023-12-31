import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

const About = React.memo(() => {
   return (
      <div className="container-main about py-28 text-justify">
         <div className="w-1/2 div-content">
            <div className="heading1 text-5xl font-bold mb-14">ABOUT BRONX</div>
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
               <Link
                  to="/about"
                  className="block w-fit px-10 py-5 bg-red-700 font-bold text-white hover:bg-gray-900"
               >
                  SCHEDULE
               </Link>
            </div>
         </div>
      </div>
   );
});

export default About;
