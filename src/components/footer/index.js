import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const FooterMain = React.memo(() => {
   return (
      <div className="footer container-main flex">
         <div className="w-1/2 flex flex-col">
            <div className="text-2xl font-bold">WORKING HOURS</div>
            <div className="mt-10 font-medium">
               Monday - Friday 5:00 AM - 12:00 AM
            </div>
            <div className="font-medium">
               Sunday - Saturday 8:00 AM - 10:00 PM
            </div>
            <div className="w-full flex mt-10">
               <Link to="https://www.twitter.com/" target="_blank">
                  Twitter
               </Link>
               <Link
                  to="https://www.facebook.com/"
                  target="_blank"
                  className="mx-10"
               >
                  Facebook
               </Link>
               <Link to="https://www.instagram.com/" target="_blank">
                  Instagram
               </Link>
            </div>
         </div>
         <div className="w-1/2 flex flex-col">
            <div className="text-2xl font-bold">ADDRESS</div>
            <div className="mt-10 font-medium">
               <Link to="https://goo.gl/maps/BGa5oc6ypXKfG8cEA" target="_blank">
                  364 Cộng Hòa, Phường 13, Tân Bình, TP Hồ Chí Minh, Việt Nam
               </Link>
            </div>
         </div>
      </div>
   );
});

export default FooterMain;
