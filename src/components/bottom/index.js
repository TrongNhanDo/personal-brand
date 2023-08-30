import React from 'react';
import { Link } from 'react-router-dom';

const Bottom = React.memo(() => {
   return (
      <div className="container-main my-24">
         <div className="text-5xl font-bold">ARE YOU READY FOR CHANGES?</div>
         <div className="mt-14">
            <Link
               to="/sign-up"
               className="block w-fit px-10 py-5 bg-red-700 font-bold text-white hover:bg-gray-900"
            >
               MAKE IT HAPPEN
            </Link>
         </div>
      </div>
   );
});

export default Bottom;
