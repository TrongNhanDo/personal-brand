import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const FooterMain = React.memo(() => {
   return (
      <div className="footer container-main flex">
         <div className="div1 w-1/2 flex flex-col">
            <div className="text-2xl font-bold">WORKING HOURS</div>
            <div className="mt-10 font-medium">
               Monday - Friday 5:00 AM - 12:00 AM
            </div>
            <div className="font-medium">
               Sunday - Saturday 8:00 AM - 10:00 PM
            </div>
            <div className="w-full flex mt-10">
               <Link
                  className="underline decoration-white"
                  to="https://twitter.com/dtnhan2k"
                  target="_blank"
               >
                  Twitter
               </Link>
               <Link
                  className="mx-5 underline decoration-white"
                  to="https://www.facebook.com/profile.php?id=100092506451173"
                  target="_blank"
               >
                  Facebook
               </Link>
               <Link
                  className="underline decoration-white"
                  to="https://www.instagram.com/dtn2k_/"
                  target="_blank"
               >
                  Instagram
               </Link>
            </div>
         </div>
         <div className="div2 w-1/2 flex flex-col">
            <div className="text-2xl font-bold">ADDRESS</div>
            <div className="mt-10 font-medium">
               <Link to="https://goo.gl/maps/BGa5oc6ypXKfG8cEA" target="_blank">
                  {process.env.REACT_APP_ADDRESS}
               </Link>
            </div>
         </div>
      </div>
   );
});

export default FooterMain;
