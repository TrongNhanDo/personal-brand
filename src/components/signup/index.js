import React, { useCallback, useEffect } from 'react';
import { useFormik } from 'formik';
import { handleScrollTop } from '../common/utils';
import { validationSchema } from './validation';

const SignUp = React.memo(() => {
   useEffect(() => {
      handleScrollTop();
   }, []);

   const onSubmit = (values) => {
      console.log({ values });
   };

   const formikBag = useFormik({
      initialValues: {
         firstName: '',
         lastName: '',
         email: '',
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
      <div className="container-main bg-black text-white flex flex-col py-10">
         <div className="text-5xl font-bold mt-20">SIGN UP FOR A WORKOUT</div>
         <form onSubmit={formikBag.handleSubmit}>
            <div className="w-2/5 flex flex-col mt-44">
               <div className="w-full flex flex-col font-normal">
                  <label htmlFor="firstName">Name*</label>
                  <input
                     type="text"
                     name="firstName"
                     id="firstName"
                     placeholder="Your name"
                     className={`p-3 bg-gray-400 text-black placeholder:text-gray-500 hover:bg-white ${
                        formikBag.errors && formikBag.errors.firstName
                           ? 'bg-yellow-400 border-2 border-red-700'
                           : ''
                     }`}
                     value={formikBag.values.firstName}
                     onChange={formikBag.handleChange}
                  />
                  {formikBag.errors &&
                     formikBag.errors.firstName &&
                     formikBag.touched &&
                     formikBag.touched.firstName && (
                        <div className="text-red-700">
                           {formikBag.errors.firstName}
                        </div>
                     )}
               </div>
               <div className="w-full flex flex-col mt-5 font-normal">
                  <label htmlFor="lastName">Last name*</label>
                  <input
                     type="text"
                     name="lastName"
                     id="lastName"
                     placeholder="Your last name"
                     className={`p-3 bg-gray-400 text-black placeholder:text-gray-500 hover:bg-white  ${
                        formikBag.errors && formikBag.errors.lastName
                           ? 'bg-yellow-400 border-2 border-red-700'
                           : ''
                     }`}
                     value={formikBag.values.lastName}
                     onChange={formikBag.handleChange}
                  />
                  {formikBag.errors &&
                     formikBag.errors.lastName &&
                     formikBag.touched &&
                     formikBag.touched.lastName && (
                        <div className="text-red-700">
                           {formikBag.errors.lastName}
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
