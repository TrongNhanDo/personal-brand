import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

const HeaderMain = React.memo(() => {
   const location = useLocation();
   const pathname = location.pathname || '';
   const [isHeaderNormal, setIsHeaderNormal] = useState(true);

   useEffect(() => {
      setIsHeaderNormal(true);
   }, [pathname]);

   return (
      <div
         className={`container-main header ${
            isHeaderNormal ? '' : 'responsive'
         } text-white`}
      >
         <Link to="/">Bronx Club</Link>
         <Link
            to="/classes"
            className={pathname === '/classes' ? 'text-black' : ''}
         >
            Classes
         </Link>
         <Link
            to="/personal-workouts"
            className={pathname === '/personal-workouts' ? 'text-black' : ''}
         >
            Personal Workouts
         </Link>
         <Link
            to="/price-and-plan"
            className={pathname === '/price-and-plan' ? 'text-black' : ''}
         >
            Prices & Plans
         </Link>
         <Link
            to="/about"
            className={pathname === '/about' ? 'text-black' : ''}
         >
            Schedule
         </Link>
         <Link
            to="/sign-up"
            className={pathname === '/sign-up' ? 'text-black' : ''}
         >
            Sign up
         </Link>
         <Link
            to="javascript:void(0)"
            className="showMenu"
            onClick={() => setIsHeaderNormal((prev) => !prev)}
         >
            {isHeaderNormal ? (
               <i class="fa-solid fa-bars"></i>
            ) : (
               <i class="fa-solid fa-xmark"></i>
            )}
         </Link>
      </div>
   );
});

export default HeaderMain;
