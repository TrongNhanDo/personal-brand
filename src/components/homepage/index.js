import React from 'react';
import Banner from './banner/index';
import PopularClasses from './popular-classes/index';
import About from './about/index';
import Classes from './classes';
import Bottom from '../bottom';

const HomePage = React.memo(() => {
   return (
      <div>
         <Banner />
         <PopularClasses />
         <About />
         <Classes />
         <Bottom />
      </div>
   );
});

export default HomePage;
