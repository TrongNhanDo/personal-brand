import React from 'react';

const Bottom = React.memo(() => {
   return (
      <div className="container-main my-24">
         <div className="text-5xl font-bold">ARE YOU READY FOR CHANGES?</div>
         <div className="mt-14">
            <button className="block px-10 py-5 bg-red-700 font-bold text-white">
               MAKE IT HAPPEN
            </button>
         </div>
      </div>
   );
});

export default Bottom;
