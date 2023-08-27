import React from 'react';
import { Link } from 'react-router-dom';
import './classes.css';

const Classes = React.memo(() => {
   return (
      <div className="container-main classes py-48 flex justify-end text-justify">
         <div className="w-1/2 flex flex-col items-end">
            <div className="text-5xl font-bold mb-14 w-full float-left">
               CLASSES
            </div>
            <div className="text-base font-medium">
               We host dozens of classes every day, from dead-lifting and HIT to
               yoga and pilates. We also have different classes for varying
               levels of ability.
            </div>
            <div className="text-base font-medium mt-8">
               Check out our individual class pages to see what’s on when, and
               stop on by for a chat if you want to see how we do things.
            </div>
            <div className="mt-20 w-full float-left">
               <Link
                  to="classes"
                  className="block w-fit px-10 py-5 bg-red-700 font-bold text-white"
               >
                  CLASSES
               </Link>
            </div>
         </div>
      </div>
   );
});

export default Classes;
