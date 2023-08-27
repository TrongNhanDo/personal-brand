import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';

const HeaderMain = React.memo(() => {
   const location = useLocation();
   const pathname = location.pathname || '';

   return (
      <div className="container-main header text-white">
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
            to="/schedule"
            className={pathname === '/schedule' ? 'text-black' : ''}
         >
            Schedule
         </Link>
      </div>
   );
});

export default HeaderMain;
