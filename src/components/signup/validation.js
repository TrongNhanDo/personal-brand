import * as Yup from 'yup';

export const validationSchema = () => {
   return Yup.object().shape({
      firstName: Yup.string().required('This field cannot be left blank'),
      lastName: Yup.string().required('This field cannot be left blank'),
      email: Yup.string().email().required('This field cannot be left blank'),
      message: Yup.string().required('This field cannot be left blank'),
   });
};
