import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { handleScrollTop } from '../common/utils';
import './personal-trainer.css';

const PersonalTrainer = React.memo(() => {
   const emailAddress = 'example@gmail.com';
   const subjectMail = 'Custom from Bronx Gym & Club';
   const bodyMail =
      'I want to contact you for a training course at the Bronx Club';

   useEffect(() => {
      handleScrollTop();
   }, []);

   return (
      <div className="personal-trainer container-main flex flex-col text-white bg-black py-20 text-justify">
         <div className="heading1 text-5xl font-bold mb-28">
            PERSONAL TRAINERS
         </div>
         <div className="item flex w-full">
            <div className="w-1/2 text-white flex flex-col justify-center">
               <div className="heading2 text-3xl font-bold">MATTHEW HERON</div>
               <div className="text-base font-medium mt-10">
                  Mathew is the expert to talk to if your fitness goal is to
                  lose weight or tone up. Working clients through high-intensity
                  workouts and tailored fitness plans, Mat doesn’t take no for
                  an answer when it comes to your goals.
               </div>
               <div className="text-base font-medium mt-8">
                  With a background in sports psychology and physical therapy,
                  Matt understands how the mind and body need to work together
                  for you to achieve success.
               </div>
               <div className="mt-20">
                  <Link
                     to={`mailto:${emailAddress}?subject=${subjectMail} &body= ${bodyMail}`}
                     className="block w-fit px-10 py-5 bg-red-700 font-bold text-white hover:bg-gray-900"
                  >
                     SCHEDULE WORKOUT
                  </Link>
               </div>
            </div>
            <div className="w-1/2 flex justify-end">
               <div className="div-image w-5/6 flex flex-col items-right">
                  <img
                     src={require('../../assets/image/coach1.avif')}
                     alt=""
                     className="mb-10"
                  />
               </div>
            </div>
         </div>
         <div className="item flex w-full">
            <div className="w-1/2 flex">
               <div className="div-image w-5/6 flex flex-col items-right">
                  <img
                     src={require('../../assets/image/coach2.avif')}
                     alt=""
                     className="mb-10"
                  />
               </div>
            </div>
            <div className="w-1/2 text-white flex flex-col justify-center">
               <div className="heading2 text-3xl font-bold">JOHN HEERON</div>
               <div className="text-base font-medium mt-10">
                  Whether you’re new to boxing or a seasoned fighter, John can
                  teach you a thing or two about keeping fit for the ring and
                  understanding your opponent.
               </div>
               <div className="text-base font-medium mt-8">
                  While he comes from the world of professional boxing, John
                  takes a holistic approach to fitness, and is just as likely to
                  throw you into a yoga class as he is to throw you around the
                  boxing ring.
               </div>
               <div className="mt-20">
                  <Link
                     to={`mailto:${emailAddress}?subject=${subjectMail} &body= ${bodyMail}`}
                     className="block w-fit px-10 py-5 bg-red-700 font-bold text-white hover:bg-gray-900"
                  >
                     SCHEDULE WORKOUT
                  </Link>
               </div>
            </div>
         </div>
         <div className="item flex w-full">
            <div className="w-1/2 text-white flex flex-col justify-center">
               <div className="heading2 text-3xl font-bold">INNA GEBROW</div>
               <div className="text-base font-medium mt-10">
                  Are you looking to improve your and joint strength? Then you
                  should get in touch within Inna for a consultation.
               </div>
               <div className="text-base font-medium mt-8">
                  A highly trained instructor for both yoga and pilates, Inna
                  can help you better understand your own body, and will help
                  guide you towards your goals in a way that works with your
                  body instead of against it.
               </div>
               <div className="mt-20">
                  <Link
                     to={`mailto:${emailAddress}?subject=${subjectMail} &body= ${bodyMail}`}
                     className="block w-fit px-10 py-5 bg-red-700 font-bold text-white hover:bg-gray-900"
                  >
                     SCHEDULE WORKOUT
                  </Link>
               </div>
            </div>
            <div className="w-1/2 flex justify-end">
               <div className="div-image w-5/6 flex flex-col items-right">
                  <img
                     src={require('../../assets/image/coach3.avif')}
                     alt=""
                     className="mb-10"
                  />
               </div>
            </div>
         </div>
      </div>
   );
});

export default PersonalTrainer;
