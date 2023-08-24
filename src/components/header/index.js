import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const HeaderMain = React.memo(() => {
   return (
      <div className="container-main header">
         <Link to="">Bronx Club</Link>
         <Link to="">Classes</Link>
         <Link to="">Personal Workouts</Link>
         <Link to="">Prices & Plans</Link>
         <Link to="">Schedule</Link>
      </div>
   );
});

export default HeaderMain;
