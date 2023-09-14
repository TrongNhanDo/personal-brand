import React, { useCallback, useEffect } from 'react';
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';
import { handleScrollTop } from '../common/utils';
import { validationSchema } from './validation';
import './signup.css';

const SignUp = React.memo(() => {
   useEffect(() => {
      handleScrollTop();
   }, []);

   const onSubmit = useCallback(async (values) => {
      await emailjs
         .send(
            process.env.REACT_APP_MAIL_SERVICE_ID,
            process.env.REACT_APP_MAIL_TEMPLATE_ID,
            {
               name: values.name.trim(),
               email: values.email.trim(),
               phone: values.phone.trim(),
               message: values.message.trim(),
            },
            process.env.REACT_APP_MAIL_PUBLIC_KEY
         )
         .then(
            function (response) {
               alert('Thanks for your request!');
               formikBag.resetForm();
            },
            function (error) {
               alert('Sending email failed. Please try again');
            }
         );
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const formikBag = useFormik({
      initialValues: {
         name: '',
         email: '',
         phone: '',
         message: '',
      },
      onSubmit: (values) => onSubmit(values),
      validationSchema,
   });

   const handleSubmit = useCallback(() => {
      try {
         formikBag.submitForm();
      } catch (error) {
         throw error;
      }
   }, [formikBag]);

   return (
      <div className="signup container-main bg-black text-white flex flex-col py-20">
         <div className="heading1 text-5xl font-bold mt-10">
            SIGN UP FOR A WORKOUT
         </div>
         <form onSubmit={formikBag.handleSubmit}>
            <div className="div-form flex flex-col mt-44">
               <div className="w-full flex flex-col font-normal">
                  <label htmlFor="name">Name*</label>
                  <input
                     type="text"
                     name="name"
                     id="name"
                     placeholder="Your name"
                     className={`p-3 bg-gray-400 text-black placeholder:text-gray-500 hover:bg-white ${
                        formikBag.errors && formikBag.errors.name
                           ? 'bg-yellow-400 border-2 border-red-700'
                           : ''
                     }`}
                     value={formikBag.values.name}
                     onChange={formikBag.handleChange}
                  />
                  {formikBag.errors &&
                     formikBag.errors.name &&
                     formikBag.touched &&
                     formikBag.touched.name && (
                        <div className="text-red-700">
                           {formikBag.errors.name}
                        </div>
                     )}
               </div>
               <div className="w-full flex flex-col mt-5 font-normal">
                  <label htmlFor="phone">Phone*</label>
                  <input
                     type="text"
                     name="phone"
                     id="phone"
                     placeholder="Your last name"
                     className={`p-3 bg-gray-400 text-black placeholder:text-gray-500 hover:bg-white  ${
                        formikBag.errors && formikBag.errors.phone
                           ? 'bg-yellow-400 border-2 border-red-700'
                           : ''
                     }`}
                     value={formikBag.values.phone}
                     onChange={formikBag.handleChange}
                  />
                  {formikBag.errors &&
                     formikBag.errors.phone &&
                     formikBag.touched &&
                     formikBag.touched.phone && (
                        <div className="text-red-700">
                           {formikBag.errors.phone}
                        </div>
                     )}
               </div>
               <div className="w-full flex flex-col mt-5 font-normal">
                  <label htmlFor="email">Email address*</label>
                  <input
                     type="email"
                     name="email"
                     id="email"
                     placeholder="Your email address"
                     className={`p-3 bg-gray-400 text-black placeholder:text-gray-500 hover:bg-white  ${
                        formikBag.errors && formikBag.errors.email
                           ? 'bg-yellow-400 border-2 border-red-700'
                           : ''
                     }`}
                     value={formikBag.values.email}
                     onChange={formikBag.handleChange}
                  />
                  {formikBag.errors &&
                     formikBag.errors.email &&
                     formikBag.touched &&
                     formikBag.touched.email && (
                        <div className="text-red-700">
                           {formikBag.errors.email}
                        </div>
                     )}
               </div>
               <div className="w-full flex flex-col mt-5 font-normal">
                  <label htmlFor="message">Your message*</label>
                  <textarea
                     name="message"
                     id="message"
                     rows="4"
                     placeholder="Enter your message"
                     className={`p-3 bg-gray-400 text-black placeholder:text-gray-500 hover:bg-white  ${
                        formikBag.errors && formikBag.errors.message
                           ? 'bg-yellow-400 border-2 border-red-700'
                           : ''
                     }`}
                     value={formikBag.values.message}
                     onChange={formikBag.handleChange}
                  ></textarea>
                  {formikBag.errors &&
                     formikBag.errors.message &&
                     formikBag.touched &&
                     formikBag.touched.message && (
                        <div className="text-red-700">
                           {formikBag.errors.message}
                        </div>
                     )}
               </div>
               <div className="w-full flex mt-5 font-normal mb-32">
                  <button
                     type="button"
                     onClick={handleSubmit}
                     className="font-medium px-12 py-4 bg-red-700 hover:bg-gray-900"
                  >
                     SUBMIT
                  </button>
               </div>
            </div>
         </form>
      </div>
   );
});

export default SignUp;
